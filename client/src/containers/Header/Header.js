import React from 'react'
import {Header as SMHeader,Icon} from 'semantic-ui-react'
import './Header.css'
const Header = (props) => 
            <header className="memo-header">
                <SMHeader as='h1' textAlign="center" color='violet'>
                    <Icon name='list' circular />
                    <SMHeader.Content>
                        备忘录
                    </SMHeader.Content>
                </SMHeader>
            </header>
        
export default Header;