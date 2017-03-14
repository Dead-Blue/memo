import {LOAD_MEMOS,ADD_MEMO,TOGGLE_COMPLETE,DELETE_MEMO,EDIT_MEMO,SEARCH_MEMO} from '../constants/ActionTypes'

const memos = (state={loading:false,memos:[{title:"TEST",id:0,completed:false,show:true}],category:"默认"},action)=>{
    switch (action.type){
        
        case LOAD_MEMOS:
            return {...state,loading:true}
        case ADD_MEMO:
            return {
                ...state,
                memos:[
                {
                    id:state.memos.reduce((maxId,memo)=>Math.max(memo.id,maxId),-1)+1,
                    completed: false,
                    title:action.payload.text,
                    show:true
                },
                ...state.memos
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
                        }
                    }
                    return x;
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
        default:
            return state;
    }
}
export default memos;