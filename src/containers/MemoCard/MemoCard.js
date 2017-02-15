import React,{Component} from 'react'
import './MemoCard.css'
import MemosInput from '../../components/MemosInput/MemosInput'
import MemosList from '../../components/MemosList/MemosList'

class MemoCard extends Component {
    render(){
        return (
            <div>
                <h3>MemoCard</h3>
                <div className="memo-card-header">
                    <div className="memo-card-title"></div>
                    <div className="memo-card-count"></div>
                </div>
                <MemosInput />
                <MemosList />
            </div>
        )
    }
}
export default MemoCard;