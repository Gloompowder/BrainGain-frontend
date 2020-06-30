import React from 'react'
import DeckCards from '../components/DeckCards'

class DecksDiv extends React.Component{
    render(){
        return( <div className="DeckDiv">
                {this.props.decks.map(deck=>{return(deck.user_id === this.props.user.id?
                    <DeckCards 
                    key={deck.id} 
                    showCards={this.props.showCards}
                    toggleShow={this.toggleShow}
                    user={this.props.user} 
                    cards={this.props.cards} 
                    deck={deck}/>: null)
                })}

            </div>
        )
    }
}
export default DecksDiv