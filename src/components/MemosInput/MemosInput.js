import React,{Component} from 'react'
import './MemosInput.css'
import {Form,Input} from 'semantic-ui-react'

const {Field} = Form;

class MemosInput extends Component {

    state={
            text:this.props.text?this.props.text:'',
            completed:false,
            id:0
    }

    handleSubmit=e=>{
        const {onSave,newTodo}=this.props;
        const text = e.target.value.trim();
        if(e.which ===13){
            if(text==="")
                return;
            onSave(text)
            if(newTodo){
                this.setState({text:''})
            }
        }
    }
    
    handleChange=e=>{
        this.setState({text:e.target.value});
    }

    handleBlur = e=>{
        const {onSave,newTodo}=this.props;
        if(!newTodo){
            onSave(e.target.value);
        }
    }

    render(){
        return (
            <Field>
                <Input type='text'
                       size='mini' 
                       fluid
                       autoFocus="true"
                       placeholder="请输入..." 
                       value={this.state.text} 
                       onChange={this.handleChange}
                       onBlur={this.handleBlur}
                       onKeyDown={this.handleSubmit}/>
            </Field>
        )
    }
}
export default MemosInput;