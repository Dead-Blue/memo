import React,{Component,PropTypes} from 'react'
import './MainSection.css'
import MemoCard from '../MemoCard/MemoCard'
import {    
    Dimmer,
    Loader,
    Message,
} from 'semantic-ui-react';
class MainSection extends Component {
    
    static propTypes = {
        memos: PropTypes.object.isRequired,
        actions:PropTypes.object.isRequired
    }

    render(){
        const {memos,actions} = this.props;
        const {loading,saving,errors} = memos;
        let dimmerActive=false;
        let loadingText="loading";
        if(loading||saving){
            if(loading){
                    dimmerActive=true;
                    loadingText="载入中";
            }else if(saving)  {
                    dimmerActive=true;
                    loadingText="保存中";
            }
        } else {
                dimmerActive=false;
        }
        return (
            <section  className="memo-mainsection">
                <Dimmer active={dimmerActive} page>
                    <Loader size='medium'>{loadingText}</Loader>
                </Dimmer>
                <Message
                    error
                    header='出现了一些错误'
                    hidden={!errors}
                    list={[
                    '请检查你的网络状态后重试',
                    '请检查你的输入后重试',
                    '服务器可能出了一些问题，请稍后重试',
                    ]}
                />
                <MemoCard {...memos} actions={actions}/>
            </section>
        )
    }
}
export default MainSection;