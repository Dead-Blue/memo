import {  put, call,takeLatest,fork } from 'redux-saga/effects'
import {
    LOADING_MEMOS,
    SAVING_MEMOS,
    SUCCESS_SAVE_MEMOS,
    SUCCESS_LOAD_MEMOS,
    SAVE_MEMOS,
    LOAD_MEMOS,
    FETCH_MEMOS,
    UPLOAD_MEMOS,
    SUCCESS_UPLOAD_MEMOS,
    FAIL_UPLOAD_MEMOS,
} from '../constants/ActionTypes'
import {saveLocalStorage,loadLocalStorage} from '../services/localStorage';
import memoRoot,{saveMemosToLocalStorage,loadMemosFromLocalStorage,loadMemosFromServer,uploadMemosToServer,watchSaveMemos,watchLoadMemos,watchFetchMemos,watchUploadMemos} from './memo'
import request,{ SERVER_URL } from '../services/request.js'

const mockMemos = [{
                    title:"test",
                    id:0,
                    completed:false,
                    list:"默认",
                    priority:"none",
                    remark:"",
                    show:true
                }]

describe("测试memo saga",()=>{

    it('memo saga root 能正确运行',()=>{
        const generator = memoRoot();
        let next = generator.next();
        expect(next.value).toEqual([
      fork(watchSaveMemos),
      fork(watchLoadMemos),
      fork(watchFetchMemos),
      fork(watchUploadMemos),
  ])
        
    })

    it('watchSaveMemos 能正确运行',()=>{
        const generator = watchSaveMemos();
        let next = generator.next();
        expect(next.value).toEqual(takeLatest(SAVE_MEMOS,saveMemosToLocalStorage))
        
    })

    it('watchLoadMemos 能正确运行',()=>{
        const generator = watchLoadMemos();
        let next = generator.next();
        expect(next.value).toEqual(takeLatest(LOAD_MEMOS,loadMemosFromLocalStorage))
        
    })

    it('watchFetchMemos 能正确运行',()=>{
        const generator = watchFetchMemos();
        let next = generator.next();
        expect(next.value).toEqual(takeLatest(FETCH_MEMOS,loadMemosFromServer))
        
    })

    it('watchUploadMemos 能正确运行',()=>{
        const generator = watchUploadMemos();
        let next = generator.next();
        expect(next.value).toEqual(takeLatest(UPLOAD_MEMOS,uploadMemosToServer))
        
    })

    it('loadMemosFromLocalStorage 能正确运行',()=>{
        const generator = loadMemosFromLocalStorage();
        let next = generator.next();
        expect(next.value).toEqual(put({type:LOADING_MEMOS}))
        next = generator.next()
        expect(next.value).toEqual(call(loadLocalStorage,"memos"))
        next = generator.next(mockMemos)
        expect(next.value).toEqual(put({type:SUCCESS_LOAD_MEMOS,payload:{"memos":mockMemos}}))
    })

    it('loadMemosFromServer 能正确运行',()=>{
        const generator = loadMemosFromServer();
        let next = generator.next();
        expect(next.value).toEqual(put({type:LOADING_MEMOS}))
        next = generator.next()
        expect(next.value).toEqual(call(request,SERVER_URL+'/api/memo',{method:'GET'}))
        next = generator.next({
            data:mockMemos
        })
        const action = {
            types:SAVE_MEMOS,
            payload:{memos:mockMemos}
        }
        expect(next.value).toEqual(call(saveMemosToLocalStorage,action))
        next = generator.next()
        expect(next.value).toEqual(put({type:SUCCESS_LOAD_MEMOS,payload:{"memos":mockMemos}}))
    })

    it('loadMemosFromServer 失败时，从localStorage获取',()=>{
        const generator = loadMemosFromServer();
        let next = generator.next();
        expect(next.value).toEqual(put({type:LOADING_MEMOS}))
        next = generator.next()
        expect(next.value).toEqual(call(request,SERVER_URL+'/api/memo',{method:'GET'}))
        next = generator.next({
            err:{}
        })
        expect(next.value).toEqual(call(loadMemosFromLocalStorage))
    })

    it('loadMemosFromServer 得到的数据为空时，从localStorage获取',()=>{
        const generator = loadMemosFromServer();
        let next = generator.next();
        expect(next.value).toEqual(put({type:LOADING_MEMOS}))
        next = generator.next()
        expect(next.value).toEqual(call(request,SERVER_URL+'/api/memo',{method:'GET'}))
        next = generator.next({
            data:[]
        })
        expect(next.value).toEqual(call(loadMemosFromLocalStorage))
    })

    it('uploadMemosToServer 能正确运行',()=>{
        const action = {
            types:SAVE_MEMOS,
            payload:{memos:mockMemos}
        }
        const generator = uploadMemosToServer(action);
        let next = generator.next();
        expect(next.value).toEqual(put({type:SAVING_MEMOS}))
        next = generator.next();
        expect(next.value).toEqual(call(request,SERVER_URL+'/api/memo',{method: 'POST',headers: {     'Content-Type': 'application/json'   },body:JSON.stringify({memos:action.payload.memos})}))
        next = generator.next({data:mockMemos});
        expect(next.value).toEqual(call(saveLocalStorage,"memos",mockMemos))
        next = generator.next();
        expect(next.value).toEqual(put({type:SUCCESS_UPLOAD_MEMOS}))
    })

    it('uploadMemosToServer 获取数据失败时报错',()=>{
        const action = {
            types:SAVE_MEMOS,
            payload:{memos:mockMemos}
        }
        const generator = uploadMemosToServer(action);
        let next = generator.next();
        expect(next.value).toEqual(put({type:SAVING_MEMOS}))
        next = generator.next();
        expect(next.value).toEqual(call(request,SERVER_URL+'/api/memo',{method: 'POST',headers: {     'Content-Type': 'application/json'   },body:JSON.stringify({memos:action.payload.memos})}))
        next = generator.next({err:{}});
        expect(next.value).toEqual(put({type:FAIL_UPLOAD_MEMOS}))
    })

    it('saveMemosToLocalStorage 能正确运行',()=>{
        const action = {
            types:SAVE_MEMOS,
            payload:{memos:mockMemos}
        }
        const generator = saveMemosToLocalStorage(action);
        let next = generator.next();
        expect(next.value).toEqual(put({type:SAVING_MEMOS}))
        next = generator.next();
        expect(next.value).toEqual(call(saveLocalStorage,"memos",action.payload.memos))
        next = generator.next();
        expect(next.value).toEqual(put({type:SUCCESS_SAVE_MEMOS}))
    })

})