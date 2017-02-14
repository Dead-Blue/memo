import { createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootRedcer from '../reducers'

const configureStore = preloadedState => createStore(
    rootRedcer,
    preloadedState,
    applyMiddleware(thunk)
)

export default configureStore;