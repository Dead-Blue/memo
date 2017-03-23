import React,{Component,PropTypes} from 'react'
import './MemoSearch.css'
import {Input} from 'semantic-ui-react'

class MemoSearch extends Component {

    static propTypes = {
        onSearch: PropTypes.func.isRequired,
    }

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
                <Input type='text'
                       size='mini' 
                       fluid
                       icon='search' 
                       iconPosition='left'
                       placeholder="搜索..." 
                       value={this.state.text} 
                       onChange={this.handleChange}/>
        )
    }
}
export default MemoSearch;