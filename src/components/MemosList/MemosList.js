import React,{Component} from 'react'
import './MemosList.css'
import {List} from 'semantic-ui-react'
import MemosItem from '../MemosItem/MemosItem'
class MemosList extends Component {
    render(){
        const {memos,...actions} = this.props;
        return (
            <List celled size={'big'}>
                {memos.map(memo=>
                    <MemosItem memo={memo} key={memo.id} {...actions}/>
                )}
            </List>
        )
    }
}
export default MemosList;