import React,{Component} from 'react'
import {Container} from 'semantic-ui-react'
import './Footer.css'
class Footer extends Component {
    render(){
        return (
            <div className="memo-footer">
                <Container text textAlign="center">
                    作者:DeadBlue 
                </Container>
            </div>
        )
    }
}
export default Footer;