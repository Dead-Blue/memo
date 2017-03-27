import React,{Component,PropTypes} from 'react'
import './MainSection.css'
import MemoCard from '../MemoCard/MemoCard'
import {    
    Dimmer,
    Loader,
} from 'semantic-ui-react';
class MainSection extends Component {
    
    static propTypes = {
        memos: PropTypes.object.isRequired,
        actions:PropTypes.object.isRequired
    }

    render(){
        const {memos,actions} = this.props;
        const {loading,saving} = memos;
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
                <Dimmer active={dimmerActive}>
                    <Loader size='medium'>{loadingText}</Loader>
                </Dimmer>
                <MemoCard {...memos} actions={actions}/>
            </section>
        )
    }
}
export default MainSection;