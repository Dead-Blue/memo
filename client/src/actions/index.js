import * as types from '../constants/ActionTypes'

export const loadMemos = ()=>({ type:types.LOAD_MEMOS})

export const saveMemos = (memos)=>({ type:types.SAVE_MEMOS,payload:{memos:memos}})

export const addMemo = (text)=>({type:types.ADD_MEMO,payload:{text:text}})

export const editMemo = (text,id)=>({type:types.EDIT_MEMO,payload:{text:text,id:id}})

export const editMemoDetail = (id,memoDetail)=>({type:types.EDIT_MEMODETAIL,payload:{id:id,memoDetail:memoDetail}})

export const toggleComplete = (id) =>({type:types.TOGGLE_COMPLETE,payload:{id:id}})

export const deleteMemo = (id) =>({type:types.DELETE_MEMO,payload:{id:id}})

export const searchMemo = (keyword)=>({type:types.SEARCH_MEMO,payload:{keyword:keyword}})

export const filterCompleted = ()=>({type:types.FILTER_COMPLETED})

export const filterUncompleted = ()=>({type:types.FILTER_UNCOMPLETED})

export const filterAll = ()=>({type:types.FILTER_ALL})

export const fetchMemos = ()=>({ type:types.FETCH_MEMOS})

export const uploadMemos = (memos)=> ({type:types.UPLOAD_MEMOS,payload:{memos:memos}})
