import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('memos actions',()=>{
    it('loadMemos应当创建LOAD_MEMOS action',()=>{
        expect(actions.loadMemos()).toEqual({
            type: types.LOAD_MEMOS
        })
    })
})