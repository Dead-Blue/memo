import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux';
import './index.css';
import configureStore from './store/configureStore'
import Root from './containers/Root'
import memoSagas from './sagas/memo';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
store.runSaga(memoSagas)
render(
    <Root store={store} history={history} />,
    document.getElementById('root')
)
