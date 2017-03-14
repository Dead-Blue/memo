import React,{Component} from 'react'
import './MemosItem.css'
import {List,Checkbox,Icon} from 'semantic-ui-react';
import classNames from 'classnames';
import MemosInput from '../MemosInput/MemosInput';

const {Item,Content} = List;
class MemosItem extends Component {

    state = {
        editing: false
    }

    handleToggleComplete=(e)=>{
        const {toggleComplete,memo}=this.props;
        toggleComplete(memo.id);
    }

    handleDelete=(e)=>{
        const {deleteMemo,memo}=this.props;
        deleteMemo(memo.id);
    }

    handleEditClick=(e)=>{
        this.setState({
            editing:true
        })
    }

    handleEdit=(text)=>{
         const {editMemo,memo} = this.props;
         editMemo(text,memo.id);
         this.setState({
            editing:false
        })
    }

    render(){
        const {memo}=this.props;
        const {title,id} = memo;
        const itemClassName=classNames({
            "memo-completed":memo.completed,
            "memo-editing":this.state.editing,
        })
        if(this.state.editing === true){
           
            const MemosInputProps={
             newTodo:false,
             onSave:this.handleEdit
            }
            return (<Item key={id} >
                    <MemosInput {...MemosInputProps} text={title}/>
            </Item>)
        } else {
           return (<Item key={id} >
                    <Content  floated='left'>
                        <Checkbox onChange={this.handleToggleComplete}/>
                    </Content>
                     <span className={itemClassName} onClick={this.handleEditClick}>{title}</span>
                   <Content  floated='right'>
                        <Icon link name='close' onClick={this.handleDelete}/>
                    </Content>
            </Item>)
        }
    }
}
export default MemosItem;