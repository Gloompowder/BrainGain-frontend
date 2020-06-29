import React from 'react'
import NavBar from '../components/NavBar'
import DeckDiv from './DecksDiv'

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar user={this.props.user}/>
                <DeckDiv user={this.props.user} decks={this.props.decks} cards={this.props.cards}/>
            </div>
        )
    }
}

export default Home