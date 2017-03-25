import React,{Component,PropTypes} from 'react'
import './MemosList.css'
import {List} from 'semantic-ui-react'
import MemosItem from '../MemosItem/MemosItem'
class MemosList extends Component {

     static propTypes = {
        memos: PropTypes.array.isRequired,
        actions:PropTypes.object.isRequired
    }

    render(){
        const {memos,actions} = this.props;
        return (
                <List size={'big'}>
                    {memos.filter(memo=>memo.show?true:false).map(memo=>
                        <MemosItem memo={memo} key={memo.id} {...actions}/>
                    )}
                </List>
        )
    }
}
export default MemosList;