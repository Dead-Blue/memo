import React,{Component} from 'react'
import './MemosInput.css'
import {Form,Input} from 'semantic-ui-react'

const {Field} = Form;

class MemosInput extends Component {

    constructor(props){
        super(props)
        this.state={
            text:'',
            completed:false,
            id:0
        }
    }

    handleSubmit=e=>{
        const {onSave,newTodo}=this.props;
        const text = e.target.value.trim();
        if(e.which ===13){
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
                       autoFocus="true" 
                       value={this.state.text} 
                       onChange={this.handleChange}
                       onBlur={this.handleBlur}
                       onKeyDown={this.handleSubmit}/>
            </Field>
        )
    }
}
export default MemosInput;