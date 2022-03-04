import React from 'react'
import CommunityDeckCard from './CommunityDeckCard'

class CommunityDeckDiv extends React.Component{

    render(){console.log(this.props)
        return(
            <div className="CommunityDeckCard">
                {this.props.allDecks.map(deck=><CommunityDeckCard
                key={deck.id}
                name={deck.name}
                deckUser={deck.user}
                user={this.props.user}
                cards={this.props.cards}
                toggleCommunityDeck={this.state.toggleCommunityDeck}
                handleCommunityToggle={this.handleCommunityToggle}
                />)}
            </div>
        )
    }
}

export default CommunityDeckDiv