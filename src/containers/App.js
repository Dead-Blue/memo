import React,{PropTypes,Component} from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'
import Footer from './Footer/Footer'
class App extends Component {
    
    componentDidMount(){
        this.props.actions.loadMemos();
    }
    render() {
        const mainSectionProps={
            actions:this.props.actions,
            memos:this.props.memos,
        }    
        return (
            <div>
                <Header />
                <MainSection {...mainSectionProps}/>
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