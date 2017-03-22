import React,{Component} from 'react'
import {Header as SMHeader,Icon} from 'semantic-ui-react'
import './Header.css'
class Header extends Component {
    render(){
        return (
            <div className="memo-header">
                <SMHeader as='h1' textAlign="center" color='violet'>
                    <Icon name='list' circular />
                    <SMHeader.Content>
                        备忘录
                    </SMHeader.Content>
                </SMHeader>
            </div>
        )
    }
}
export default Header;