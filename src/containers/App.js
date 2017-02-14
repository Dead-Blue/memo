import React,{PropTypes,Component} from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'
import Footer from './Footer/Footer'
class App extends Component {
    render() {    
        return (
            <div>
                <Header />
                <MainSection />
                <Footer />
            </div>
        )
    }
}

App.protoTypes={
    actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    memos:state.memos
})

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators(Actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);