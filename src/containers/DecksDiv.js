import React from 'react'
import DeckCards from '../components/DeckCards'

class DecksDiv extends React.Component{
    render(){
        return( <div className="DeckDiv">
            {this.props.createDeckForm === true ? 
            <form>
            <p>New Deck</p>
            <input type="text" name="newDeck" onChange={this.props.newDeckFunction} value={this.props.newDeck}></input>
            <input type="button" value="Submit" onClick={this.props.createDeckFunction}/>
            <input type="button" value="Back" onClick={this.props.createDeckFormFunction}/>
            </form>:
            <input type="button" value="Create Deck Form" onClick={this.props.createDeckFormFunction}/>
            }
                {this.props.decks.map(deck=>{return(deck.user_id === this.props.user.id?
                    <DeckCards 
                    key={deck.id} 
                    user={this.props.user} 
                    cards={this.props.cards} 
                    deck={deck}
                    {...this.props}
                    />: null)
                })}

            </div>
        )
    }
}
export default DecksDiv