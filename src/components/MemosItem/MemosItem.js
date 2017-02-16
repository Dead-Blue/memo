import React,{Component} from 'react'
import './MemosItem.css'
import {List} from 'semantic-ui-react';

const {Item,Content} = List;
class MemosItem extends Component {
    render(){
        const {memo}=this.props;
        const {title,id} = memo;
        return (
            <Item key={id}>
                <Content>
                   {title} 
                </Content>
            </Item>
        )
    }
}
export default MemosItem;