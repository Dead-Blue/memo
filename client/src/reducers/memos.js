import {
    SUCCESS_SAVE_MEMOS,
    LOADING_MEMOS,
    SAVING_MEMOS,
    FAIL_SAVE_MEMOS,
    SUCCESS_LOAD_MEMOS,
    FAIL_LOAD_MEMOS,
    SUCCESS_UPLOAD_MEMOS,
    FAIL_UPLOAD_MEMOS,
    ADD_MEMO,
    TOGGLE_COMPLETE,
    DELETE_MEMO,
    EDIT_MEMO,
    EDIT_MEMODETAIL,
    SEARCH_MEMO,
    FILTER_ALL,
    FILTER_COMPLETED,
    FILTER_UNCOMPLETED,
} from '../constants/ActionTypes'
const initMemoState = {
    loading:false,
    saving:false,
    errors:false,
    memos:[],
    filter:FILTER_ALL,
}
const memos = (state=initMemoState,action)=>{
    switch (action.type){
        case LOADING_MEMOS:
            return {
                ...state,
                loading:true
            }
        case SUCCESS_UPLOAD_MEMOS:
            return {...state,saving:false,errors:false}
         case FAIL_UPLOAD_MEMOS:
            return {...state,saving:false,errors:true}
        case SUCCESS_LOAD_MEMOS:
            return {
                ...state,
                memos:action.payload.memos,
                loading:false,
                errors:false,
            }
         case FAIL_LOAD_MEMOS:
            return {...state,loading:false,errors:true}
        case SAVING_MEMOS:
            return {...state,saving:true}
        case SUCCESS_SAVE_MEMOS:
            return {
                ...state,
                saving:false,
                errors:false,
            }
        case FAIL_SAVE_MEMOS:
            return {...state,saving:false,errors:true}
        case ADD_MEMO:
            return {
                ...state,
                memos:[
                ...state.memos,
                {
                    id:state.memos.reduce((maxId,memo)=>Math.max(memo.id,maxId),-1)+1,
                    completed: false,
                    title:action.payload.text,
                    show:state.filter===FILTER_COMPLETED?false:true,
                    list:"默认",
                    priority:"none",
                    remark:"",
                }
            ]
        }
        case EDIT_MEMO:
            return {
                ...state,
                memos:state.memos.map(x=>{
                    if(x.id===action.payload.id){
                        return {
                            ...x,
                            title:action.payload.text
                        }
                    }
                    return x;
                })
            }
        case EDIT_MEMODETAIL:
            return {
                ...state,
                memos:state.memos.map(x=>{
                    if(x.id===action.payload.id){
                        return {
                            ...x,
                            list:action.payload.memoDetail.list,
                            priority:action.payload.memoDetail.priority,
                            remark:action.payload.memoDetail.remark,
                        }
                    }
                    return x;
                })
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                memos:state.memos.map(x=>{
                    if(x.id===action.payload.id){
                        return {
                            ...x,
                            completed:!x.completed,
                            show:state.filter===FILTER_ALL?true:!state.filter,
                        }
                    }
                    return {
                        ...x,
                    };
                })
            }
        case DELETE_MEMO:
            return {
                ...state,
                memos:state.memos.filter(x=>x.id!==action.payload.id)
            }
        case SEARCH_MEMO:
            return{
                ...state,
                memos:state.memos.map(x=>{
                    if(x.title.toLocaleLowerCase().indexOf(action.payload.keyword.toLocaleLowerCase())===-1){
                        return{
                            ...x,
                            show:false
                        }
                    }
                    return {
                        ...x,
                        show:true
                    };
                })
            }
        case FILTER_COMPLETED:
            return{
                ...state,
                memos:state.memos.map(x=>{
                    if(x.completed===true){
                        return{
                            ...x,
                            show:true
                        }
                    }
                    return {
                        ...x,
                        show:false
                    };
                }),
                filter:FILTER_COMPLETED           
            }
        case FILTER_UNCOMPLETED:
            return{
                ...state,
                memos:state.memos.map(x=>{
                    if(x.completed===false){
                        return{
                            ...x,
                            show:true
                        }
                    }
                    return {
                        ...x,
                        show:false
                    };
                }),
                filter:FILTER_UNCOMPLETED
            }
        case FILTER_ALL:
            return{
                ...state,
                memos:state.memos.map(x=>{
                        return{
                            ...x,
                            show:true
                        }
                }),
                filter:FILTER_ALL
            }
        default:
            return state;
    }
}
export default memos;