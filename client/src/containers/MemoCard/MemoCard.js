import React, {
    Component,
    PropTypes,
} from 'react';
import './MemoCard.css';
import MemosInput from '../../components/MemosInput/MemosInput';
import MemosList from '../../components/MemosList/MemosList';
import MemoSearch from '../../components/MemoSearch/MemoSearch';
import {
    Card,
    Button,
    Label,
    Divider,
} from 'semantic-ui-react';

class MemoCard extends Component {

    static propTypes = {
        memos: PropTypes.array.isRequired,
        actions:PropTypes.object.isRequired
    }

    handleSaveMemos=()=>{
        const {memos,actions}=this.props;
        const {saveMemos} = actions;
        saveMemos(memos);
    }

    handleFetchMemos=()=>{
        const {actions}=this.props;
        const {fetchMemos} = actions;
        fetchMemos();
    }
    
    handleUploadMemos=()=>{
        const {memos,actions}=this.props;
        const {uploadMemos} = actions;
        uploadMemos(memos);
    }

    render(){
        const {memos,actions} = this.props;
        const {addMemo,searchMemo,filterCompleted,filterUncompleted,filterAll,...rest}=actions;
        const memoCompleted=memos.filter((memo)=>{
           return memo.completed===true;
        })

        return (
            <Card fluid>

                <Card.Content>
                <h1>提醒</h1>
                <Label as='span' color='teal' ribbon="right">已完成：{memoCompleted.length}项</Label>
                <Divider />
                <MemoSearch onSearch={searchMemo}/> 
                <Divider />
                <div className="memo-card-header">
                    <div className="memo-card-title"></div>
                    <div className="memo-card-count"></div>
                </div>
                <MemosList memos={memos} actions={rest}/>
                <MemosInput onSave={addMemo} newTodo={true}/>
                </Card.Content>
                                 
                <Card.Content extra>
                    <Button.Group widths='3'>
                            <Button color='blue' onClick={filterUncompleted}>未完成</Button>
                            <Button color='grey' onClick={filterCompleted}>已完成</Button>
                            <Button color='green' onClick={filterAll}>全部</Button>
                    </Button.Group>
                    <Divider />
                    <Button.Group widths='3'>
                        <Button color='orange' onClick={this.handleSaveMemos}>保存备忘录</Button>
                        <Button color='blue' onClick={this.handleFetchMemos}>载入备忘录</Button>
                        <Button color='green' onClick={this.handleUploadMemos}>上传备忘录</Button>
                    </Button.Group>
                   
                </Card.Content>
            </Card>
        )
    }
}
export default MemoCard;