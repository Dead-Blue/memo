import * as types from '../constants/ActionTypes'

export const loadMemos = ()=>({ type:types.LOAD_MEMOS})

export const addMemo = (text)=>({type:types.ADD_MEMO,payload:{text:text}})

export const toggleComplete = (id) =>({type:types.TOGGLE_COMPLETE,payload:{id:id}})

export const deleteMemo = (id) =>({type:types.DELETE_MEMO,payload:{id:id}})