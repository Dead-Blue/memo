import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import routes from '../routes'
import { Router} from 'react-router'
import '../../public/semantic/dist/semantic.min.css'
/* istanbul ignore next */
const Root = ({store,history}) =>(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
)

Root.protoTypes = {
    store:PropTypes.object.isRequired,
    history:PropTypes.object.isRequired
}
export default Root;