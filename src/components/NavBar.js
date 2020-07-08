import React from 'react'

class NavBar extends React.Component{
    render(){
        return(
            <ul>
                <h1>Welcome, {this.props.user.username}</h1>
                <li>My Decks</li>
                <li>Community</li>
                <li>New Card</li>
                <li>New Deck</li>
                <li>Logout</li>
            </ul>
        )
    }
}

export default NavBar