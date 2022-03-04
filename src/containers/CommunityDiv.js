import React from 'react'
import CommunityDeckDiv from './CommunityDeckDiv.js'

class CommunityDiv extends React.Component{
    renderDecks=()=>{console.log(this.props.allDecks)
        {return(this.props.allDecks.map(deck => deck.user_id !== this.props.user.id ? <CommunityDeckDiv 
            key={deck.id} 
            name={deck.name} 
            allCards={this.props.allCards} 
            user={this.props.user} 
            deckUser={deck.user_id}/>: null))} 
    }
render(){
    return(
        <div>
            <h1>Community Decks</h1>
            {this.renderDecks()}
            <input type="button" value="Back" onClick={this.props.toggleCommunity}/>
        </div>
    )
}
}
 
export default CommunityDiv