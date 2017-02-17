import {LOAD_MEMOS,ADD_MEMO,TOGGLE_COMPLETE,DELETE_MEMO} from '../constants/ActionTypes'

const memos = (state={loading:false,memos:[{title:"TEST",id:0,completed:false}],category:"默认"},action)=>{
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
                },
                ...state.memos
            ]
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
        default:
            return state;
    }
}
export default memos;