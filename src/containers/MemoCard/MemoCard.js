import React,{Component} from 'react'
import './MemoCard.css'
import MemosAdd from '../../compoents/MemosAdd/MemosAdd'
import MemosList from '../../compoents/MemosList/MemosList'

class MemoCard extends Component {
    render(){
        return (
            <div>
                <h3>MemoCard</h3>
                <div className="memo-card-header">
                    <div className="memo-card-title"></div>
                    <div className="memo-card-count"></div>
                </div>
                <MemosAdd />
                <MemosList />
            </div>
        )
    }
}
export default MemoCard;