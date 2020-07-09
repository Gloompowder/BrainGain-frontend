import React from 'react'
import Logo from '../logo.png'

class NavBar extends React.Component{
    render(){
        return(
            <ul className="NavBar">
                <h1>Welcome, {this.props.user.username} to BrainGain</h1>
                <img src={Logo} alt="logo"/>
                <li>My Decks</li>
                {this.props.user === {}? <li onClick={this.props.handleLogout}>Login</li>:<li onClick={this.props.handleLogout}>Logout</li>}
            </ul>
        )
    }
}

export default NavBar