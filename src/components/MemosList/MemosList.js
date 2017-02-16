import React,{Component} from 'react'
import './MemosList.css'
import {List} from 'semantic-ui-react'
import MemosItem from '../MemosItem/MemosItem'
class MemosList extends Component {
    render(){
        const {memos} = this.props;
        return (
            <List>
                {memos.map(memo=>
                    <MemosItem memo={memo} key={memo.id}/>
                )}
            </List>
        )
    }
}
export default MemosList;