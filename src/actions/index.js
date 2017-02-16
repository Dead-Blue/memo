import * as types from '../constants/ActionTypes'

export const loadMemos = ()=>({ type:types.LOAD_MEMOS})

export const addMemo = (text)=>({type:types.ADD_MEMO,payload:{text:text}})