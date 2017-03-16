import * as types from '../constants/ActionTypes'

export const loadMemos = ()=>({ type:types.LOAD_MEMOS})

export const addMemo = (text)=>({type:types.ADD_MEMO,payload:{text:text}})

export const editMemo = (text,id)=>({type:types.EDIT_MEMO,payload:{text:text,id:id}})

export const toggleComplete = (id) =>({type:types.TOGGLE_COMPLETE,payload:{id:id}})

export const deleteMemo = (id) =>({type:types.DELETE_MEMO,payload:{id:id}})

export const searchMemo = (keyword)=>({type:types.SEARCH_MEMO,payload:{keyword:keyword}})

export const filterCompleted = ()=>({type:types.FILTER_COMPLETED})

export const filterUncompleted = ()=>({type:types.FILTER_UNCOMPLETED})

export const filterAll = ()=>({type:types.FILTER_ALL})
