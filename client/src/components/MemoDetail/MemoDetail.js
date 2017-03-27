import React,{Component,PropTypes} from 'react'
import {Icon,Button,Popup,Card,Dropdown,TextArea,Grid} from 'semantic-ui-react';
import './MemoDetail.css'
class MemoDetail extends Component {
    
    static propTypes = {
        memo:PropTypes.object.isRequired,
        handleEditDetail: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
    }

    state = {
        priority: this.props.memo.priority,
        list:this.props.memo.list,
        remark:this.props.memo.remark,
        isOpen:false
    }

    handleProioritySelection=(e,data)=>{
        this.setState({priority:data.value});
    }
    handleListSelection=(e,data)=>{
        this.setState({list:data.value});
    }

    handleRemarkChange=(e)=>{
        this.setState({remark:e.target.value});
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
        this.handleSubmitMemoDetailChange();
    }

    togglePopUp = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleSubmitMemoDetailChange=(e)=>{
        const {handleEditDetail,memo} = this.props;
        const newMemoDetail={
            priority: this.state.priority,
            list:this.state.list,
            remark:this.state.remark,
        }
        handleEditDetail(memo.id,newMemoDetail)
        this.setState({isOpen:false});
    }

    render(){
        const priorityOptions = [   
            { key: 0, text: '无', value: 'none' },
            { key: 1, text: '低', value: 'low' },
            { key: 2, text: '中', value: 'middle' },
            { key: 3, text: '高', value: 'high' },
            ];
        const listOptions = [   
            { key: 0, text: '默认', value: '默认' },
            { key: 1, text: '任务', value: '任务' },
            ];
        const {handleDelete} = this.props;
        return (
            <Popup wide positioning='left center' open={this.state.isOpen} onOpen={this.handleOpen} onClose={this.handleClose} trigger={<Button basic compact className="memo-button-detail" onClick={this.togglePopUp}><Icon link name='info circle'/>详细信息</Button>} on='click'>
                <Card>
                    <Card.Content header='详细信息' />
                    <Card.Content>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    <div>列表</div>
                                    <Dropdown fluid selection basic options={listOptions} defaultValue={this.props.memo.list} onChange={this.handleListSelection}/>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>优先级</div>
                                    <Dropdown fluid selection basic options={priorityOptions} defaultValue={this.props.memo.priority} onChange={this.handleProioritySelection}/>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                            
                            
       
                    </Card.Content>
                    <Card.Content>
                            <TextArea className="memo-detail-remarks" maxLength="10000" placeholder='备注(可选)' value={this.state.remark} onChange={this.handleRemarkChange} />
                    </Card.Content>
                    <Card.Content extra>
                            <Button color='red' floated="left" onClick={handleDelete}>删除</Button>
                            <Button color='blue' floated="right" onClick={this.handleSubmitMemoDetailChange}>完成</Button>              
                </Card.Content>
                </Card>
            </Popup>
        )
    }
}
export default MemoDetail;
