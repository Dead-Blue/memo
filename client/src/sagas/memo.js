import { takeLatest, put, call, fork } from 'redux-saga/effects'
import {saveLocalStorage,loadLocalStorage} from '../services/localStorage';
import {
    LOADING_MEMOS,
    SAVING_MEMOS,
    SUCCESS_SAVE_MEMOS,
    FAIL_SAVE_MEMOS,
    SUCCESS_LOAD_MEMOS,
    FAIL_LOAD_MEMOS,
    SAVE_MEMOS,
    LOAD_MEMOS,
    FETCH_MEMOS,
    UPLOAD_MEMOS,
    SUCCESS_UPLOAD_MEMOS,
    FAIL_UPLOAD_MEMOS,
} from '../constants/ActionTypes'
import request,{ SERVER_URL } from '../services/request.js'

export function* saveMemosToLocalStorage(action){
    try{
        yield put({type:SAVING_MEMOS});
        yield call(saveLocalStorage,"memos",action.payload.memos);
        yield put({type:SUCCESS_SAVE_MEMOS});
    } catch(e){
        yield put({type:FAIL_SAVE_MEMOS});
    }
}

export function* loadMemosFromServer(){
    try{
        yield put({type:LOADING_MEMOS});
        let ret=yield call(request,SERVER_URL+'/api/memo',{method:'GET'});
        if( ret.err || !(ret.data instanceof Array) || ret.data.length<1){
            yield call(loadMemosFromLocalStorage);
        } else {
            const memos=ret.data?ret.data:[];
            const action = {
                types:SAVE_MEMOS,
                payload:{memos:memos}
            }
            yield call(saveMemosToLocalStorage,action);
            yield put({type:SUCCESS_LOAD_MEMOS,payload:{"memos":memos}});
        }
    } catch(e){
        yield put({type:FAIL_LOAD_MEMOS});
    }
}

export function* loadMemosFromLocalStorage(){
    try{
        yield put({type:LOADING_MEMOS});
        let memos=yield call(loadLocalStorage,"memos");
        memos=memos?memos:[];
        yield put({type:SUCCESS_LOAD_MEMOS,payload:{"memos":memos}});
    } catch(e){
        yield put({type:FAIL_LOAD_MEMOS});
    }
}

export function* uploadMemosToServer(action){
    try{
        yield put({type:SAVING_MEMOS});
        let ret=yield call(request,SERVER_URL+'/api/memo',{method: 'POST',headers: {     'Content-Type': 'application/json'   },body:JSON.stringify({memos:action.payload.memos})});
        if(ret.err || !(ret.data instanceof Array) ){
             yield put({type:FAIL_UPLOAD_MEMOS});
        } else {
            yield call(saveLocalStorage,"memos",ret.data);
            yield put({type:SUCCESS_UPLOAD_MEMOS});
        }     
    } catch(e){
        yield put({type:FAIL_UPLOAD_MEMOS});
    }
}


export function* watchSaveMemos(){
    yield takeLatest(SAVE_MEMOS,saveMemosToLocalStorage);
}


export function* watchLoadMemos(){
    yield takeLatest(LOAD_MEMOS,loadMemosFromLocalStorage);
}


export function* watchFetchMemos(){
    yield takeLatest(FETCH_MEMOS,loadMemosFromServer);
}


export function* watchUploadMemos(){
    yield takeLatest(UPLOAD_MEMOS,uploadMemosToServer);
}


export default function* root() {
  yield [
      fork(watchSaveMemos),
      fork(watchLoadMemos),
      fork(watchFetchMemos),
      fork(watchUploadMemos),
  ]
}