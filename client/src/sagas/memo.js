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
    LOAD_MEMOS
} from '../constants/ActionTypes'

function* saveMemosToLocalStorage(action){
    try{
        yield put({type:SAVING_MEMOS});
        yield call(saveLocalStorage,"memos",action.payload.memos);
        yield put({type:SUCCESS_SAVE_MEMOS});
    } catch(e){
        yield put({type:FAIL_SAVE_MEMOS});
    }
}

function* loadMemosFromLocalStorage(){
    try{
        yield put({type:LOADING_MEMOS});
        let memos=yield call(loadLocalStorage,"memos");
        memos=memos?memos:[];
        yield put({type:SUCCESS_LOAD_MEMOS,payload:{"memos":memos}});
    } catch(e){
        yield put({type:FAIL_LOAD_MEMOS});
    }
}

function* watchSaveMemos(){
    yield takeLatest(SAVE_MEMOS,saveMemosToLocalStorage);
}

function* watchLoadMemos(){
    yield takeLatest(LOAD_MEMOS,loadMemosFromLocalStorage);
}

export default function* root() {
  yield [
      fork(watchSaveMemos),
      fork(watchLoadMemos)
  ]
}