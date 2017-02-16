import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux'
import thunk from 'redux-thunk'
import rootRedcer from '../reducers'
import createLogger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = preloadedState => {
    const store = createStore(
        rootRedcer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(thunk, createLogger()),
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore;