import {LOAD_MEMOS} from '../constants/ActionTypes'

const memos = (state={},action)=>{
    switch (action.type){
        
        case LOAD_MEMOS:
            return state;
        
        default:
            return state;
    }
}
export default memos;