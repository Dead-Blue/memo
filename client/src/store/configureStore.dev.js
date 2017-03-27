import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux'
import rootRedcer from '../reducers'
import createLogger from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootRedcer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware, createLogger()),
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}

export default configureStore;