import memos from './memos'
import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    memos,
    routing
})
export default rootReducer;