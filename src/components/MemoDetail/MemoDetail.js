import React,{Component} from 'react'
import {Icon,Button,Popup,Card,Checkbox,Dropdown,TextArea} from 'semantic-ui-react';
import './MemoDetail.css'
class MemoDetail extends Component {
    
    state = {
        priority: "none",
        remark:""
    }

    handleProioritySelection=(e,data)=>{
        this.setState({priority:data.value});
        console.log(this.state)
    }

    handleRemarkChange=(e)=>{
        this.setState({remark:e.target.value});
        console.log(this.state)
    }
    
    render(){
        const priorityOptions = [   
            { key: 0, text: '无', value: 'none' },
            { key: 1, text: '低', value: 'low' },
            { key: 2, text: '中', value: 'middle' },
            { key: 3, text: '高', value: 'high' },
            ];
        return (
            <Popup wide positioning='left center' trigger={<Button basic compact className="memo-button-detail"><Icon link name='info circle'/>详细信息</Button>} on='click'>
                <Card>
                    <Card.Content header='详细信息' />
                    <Card.Content>
                        <div>提醒我</div>
                        <Checkbox label="在以下时间提醒我"/>
                    </Card.Content>
                    <Card.Content>
                        <div className="memo-detail-priority">
                            <div>优先级</div>
                            <Dropdown fluid selection basic options={priorityOptions} defaultValue="none" onChange={this.handleProioritySelection}/>
                        </div>        
                    </Card.Content>
                    <Card.Content>
                            <TextArea className="memo-detail-remarks" maxLength="10000" placeholder='备注(可选)' value={this.state.remark} onChange={this.handleRemarkChange} />
                    </Card.Content>
                    <Card.Content extra>
                            <Button color='red' floated="left">删除</Button>
                            <Button color='blue' floated="right">完成</Button>              
                </Card.Content>
                </Card>
            </Popup>
        )
    }
}
export default MemoDetail;
