import React,{Component} from 'react'
import './MemoCard.css'
import MemosInput from '../../components/MemosInput/MemosInput'
import MemosList from '../../components/MemosList/MemosList'
import MemoSearch from '../../components/MemoSearch/MemoSearch';
import { Card } from 'semantic-ui-react'
class MemoCard extends Component {


    render(){
        const {memos,addMemo} = this.props;

        return (
            <Card>
                <Card.Content>
                <h3>MemoCard</h3>
                <div className="memo-card-header">
                    <div className="memo-card-title"></div>
                    <div className="memo-card-count"></div>
                </div>
                <MemoSearch />
                <MemosInput onSave={addMemo} newTodo={true}/>
                <MemosList memos={memos} />
                </Card.Content>
            </Card>
        )
    }
}
export default MemoCard;