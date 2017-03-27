import { createStore,applyMiddleware} from 'redux'
import rootRedcer from '../reducers'
import createSagaMiddleware, { END } from 'redux-saga'



const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootRedcer,
        preloadedState,
        applyMiddleware(sagaMiddleware)
    )
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store;
}
export default configureStore;