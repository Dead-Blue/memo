import React,{Component,PropTypes} from 'react'
import './MainSection.css'
import MemoCard from '../MemoCard/MemoCard'

class MainSection extends Component {
    
    static propTypes = {
        memos: PropTypes.object.isRequired,
        actions:PropTypes.object.isRequired
    }

    render(){
        const {memos,actions} = this.props;
        return (
            <section  className="memo-mainsection">
                <MemoCard {...memos} actions={actions}/>
            </section>
        )
    }
}
export default MainSection;