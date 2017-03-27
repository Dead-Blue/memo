import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('memos actions',()=>{
    it('loadMemos应当创建LOAD_MEMOS action',()=>{
        expect(actions.loadMemos()).toEqual({
            type: types.LOAD_MEMOS
        })
    })

    it('addMemo应当创建ADD_MEMO action',()=>{
        expect(actions.addMemo("test")).toEqual({
            type:types.ADD_MEMO,
            payload:{
                text:"test"
            }
        })
    })

})

