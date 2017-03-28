import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('memos actions',()=>{
    it('loadMemos 应当创建 LOAD_MEMOS action',()=>{
        expect(actions.loadMemos()).toEqual({
            type: types.LOAD_MEMOS
        })
    })

    it('addMemo 应当创建 ADD_MEMO action',()=>{
        expect(actions.addMemo("test")).toEqual({
            type:types.ADD_MEMO,
            payload:{
                text:"test"
            }
        })
    })

    it('saveMemos 应当创建 SAVE_MEMOS action',()=>{
        const mockMemos = [{
                title:"TEST",
                id:0,
                completed:false,
                list:"默认",
                priority:"none",
                remark:"",
                show:true
        }]
        expect(actions.saveMemos(mockMemos)).toEqual({
            type:types.SAVE_MEMOS,
            payload:{
                memos:mockMemos
            }
        })
    })

    it('loadMemos 应当创建 LOAD_MEMOS action',()=>{
        expect(actions.loadMemos()).toEqual({
            type:types.LOAD_MEMOS
        })
    })

    it('editMemo 应当创建 EDIT_MEMO action',()=>{
        expect(actions.editMemo("text",1)).toEqual({
            type:types.EDIT_MEMO,
            payload:{
                text:"text",
                id:1
            }
        })
    })

    it('editMemoDetail 应当创建 EDIT_MEMODETAIL action',()=>{
        const mockMemoDetail = {
                list:"默认",
                priority:"none",
                remark:"",
        }
        expect(actions.editMemoDetail(1,mockMemoDetail)).toEqual({
            type:types.EDIT_MEMODETAIL,
            payload:{
                id:1,
                memoDetail:mockMemoDetail
            }
        })
    })

    it('toggleComplete 应当创建 TOGGLE_COMPLETE action',()=>{
        expect(actions.toggleComplete(1)).toEqual({
            type:types.TOGGLE_COMPLETE,
            payload:{
                id:1
            }
        })
    })

    it('deleteMemo 应当创建 DELETE_MEMO action',()=>{
        expect(actions.deleteMemo(1)).toEqual({
            type:types.DELETE_MEMO,
            payload:{
                id:1
            }
        })
    })

    it('searchMemo 应当创建 SEARCH_MEMO action',()=>{
        expect(actions.searchMemo('keyword')).toEqual({
            type:types.SEARCH_MEMO,
            payload:{
                keyword:'keyword'
            }
        })
    })

    it('filterCompleted 应当创建 FILTER_COMPLETED action',()=>{
        expect(actions.filterCompleted()).toEqual({
            type:types.FILTER_COMPLETED
        })
    })

    it('filterUncompleted 应当创建 FILTER_UNCOMPLETED action',()=>{
        expect(actions.filterUncompleted()).toEqual({
            type:types.FILTER_UNCOMPLETED
        })
    })

    it('filterAll 应当创建 FILTER_ALL action',()=>{
        expect(actions.filterAll()).toEqual({
            type:types.FILTER_ALL
        })
    })
})

