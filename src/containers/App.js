import React,{PropTypes} from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
const App = ({actions})=>(
    <div>
        Hello,World!
    </div>
)

App.protoTypes={
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);