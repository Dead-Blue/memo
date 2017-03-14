import React,{Component} from 'react'
import './MemoSearch.css'
import {Form,Input} from 'semantic-ui-react'

const {Field} = Form;

class MemoSearch extends Component {

    state={
            text:'',
    }

    
    handleChange=e=>{
        const {onSearch}=this.props;
        this.setState({text:e.target.value});
        const text = e.target.value.trim();
        onSearch(text)
    }


    render(){
        return (
            <Field>
                <Input type='text'
                       size='mini' 
                       fluid
                       icon='search' 
                       iconPosition='left'
                       placeholder="搜索..." 
                       value={this.state.text} 
                       onChange={this.handleChange}/>
            </Field>
        )
    }
}
export default MemoSearch;