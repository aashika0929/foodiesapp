import React, {Component} from 'react'
import {Input, Menu, Segment, Button} from 'semantic-ui-react'
var {Link} = require('react-router');

class MenuExamplePointing extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Menu pointing>
                    <Link to='/'>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    </Link>
                    <Link to='/favourites'>
                        <Menu.Item name='favourites' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                    </Link>
                    <Menu.Menu position='right'>
                        <Link to='/'>
                            <Button  size='large' color='green'>signup</Button>
                        </Link>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}
module.exports = MenuExamplePointing;
