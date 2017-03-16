import {LOAD_MEMOS,ADD_MEMO,TOGGLE_COMPLETE,DELETE_MEMO,EDIT_MEMO,SEARCH_MEMO,FILTER_ALL,FILTER_COMPLETED,FILTER_UNCOMPLETED} from '../constants/ActionTypes'

const memos = (state={loading:false,memos:[{title:"TEST",id:0,completed:false,show:true}],filter:FILTER_ALL,category:"默认"},action)=>{
    switch (action.type){
        
        case LOAD_MEMOS:
            return {...state,loading:true}
        case ADD_MEMO:
            return {
                ...state,
                memos:[
                ...state.memos,
                {
                    id:state.memos.reduce((maxId,memo)=>Math.max(memo.id,maxId),-1)+1,
                    completed: false,
                    title:action.payload.text,
                    show:state.filter===FILTER_COMPLETED?false:true
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
                    if(!!x){
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
                filter:FILTER_ALL
            }
        default:
            return state;
    }
}
export default memos;