import React from 'react'
import DeckCards from '../components/DeckCards'

class DecksDiv extends React.Component{
    render(){
        return(
            <div className="DeckkDiv">
                {this.props.decks.map(deck=>{if(deck.user_id === this.props.user.id){
                    <DeckCards 
                    key={deck.id} 
                    user={this.props.user} 
                    cards={this.props.cards} 
                    deck={deck}/>
                }})}
            </div>
        )
    }
}
export default DecksDiv