import {  put, call } from 'redux-saga/effects'
import {
    LOADING_MEMOS,
    SAVING_MEMOS,
    SUCCESS_SAVE_MEMOS,
    SUCCESS_LOAD_MEMOS,
    SAVE_MEMOS,
} from '../constants/ActionTypes'
import {saveLocalStorage,loadLocalStorage} from '../services/localStorage';
import {saveMemosToLocalStorage,loadMemosFromLocalStorage} from './memo'

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
    it('loadMemosFromLocalStorage 能正确运行',()=>{
        const generator = loadMemosFromLocalStorage();
        let next = generator.next();
        expect(next.value).toEqual(put({type:LOADING_MEMOS}))
        next = generator.next()
        expect(next.value).toEqual(call(loadLocalStorage,"memos"))
        next = generator.next(mockMemos)
        expect(next.value).toEqual(put({type:SUCCESS_LOAD_MEMOS,payload:{"memos":mockMemos}}))
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