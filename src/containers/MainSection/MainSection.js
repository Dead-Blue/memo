import React,{Component} from 'react'
import './MainSection.css'
import MemoCard from '../MemoCard/MemoCard'

class MainSection extends Component {
    
    render(){
        const {memos,actions} = this.props;
        return (
            <div>
            <h3>MainSection</h3>
            <MemoCard {...memos} actions={actions}/>
            </div>
        )
    }
}
export default MainSection;