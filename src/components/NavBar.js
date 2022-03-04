import React from 'react'
import Logo from '../logo.png'

class NavBar extends React.Component{
    conditionalLogin=()=>{
        {return(this.props.user === {}? <li onClick={this.props.handleLogout}>Login</li>:<li onClick={this.props.handleLogout}>Logout</li>)}
    }
    render(){
        return(
            <ul className="NavBar">
                <h1>Welcome, {this.props.user.username} to BrainGain</h1>
                <img src={Logo} alt="logo"/>
                <li onClick={this.props.communityFalse}>My Decks</li>
                <li onClick={this.props.communityTrue}>Community</li>
                {this.conditionalLogin()}
            </ul>
        )
    }
}

export default NavBar