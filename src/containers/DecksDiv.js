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
            <input type="button" value="New Deck Form" onClick={this.props.createDeckFormFunction}/>}
            <br></br>
            {this.props.createCardForm ?
            <form>
                <p>New Card</p>
                <label name="New Question"  value="New Question"></label>
                <input type="text-area" onChange={this.props.handleNewCardQuestion} placeholder="New Question" value={this.props.newCardQuestion}/>
                <label name="New Answer"  valuue="New Answer"></label>
                <input type="text-area" placeholder="New Answer" onChange={this.props.handleNewCardAnswer} value={this.props.newCardAnswer}/>
                    <select name="decks" id="decks" onChange={this.props.handleNewCardDeckID}>
                        <option disabled={false}>Choose Deck</option>
                        {this.props.decks.map(deck=><option key={deck.id} className={deck.id} value={deck.name}>{deck.name}</option>)}
                    </select>
                <br></br>
                <input type="button" value="Create" onClick={this.props.createCard}/>
                <br></br>
                <input type="button" onClick={this.props.createCardFormFunction} value="Back" />
            </form>
            : <input type="button" value="Create Card Form" onClick={this.props.createCardFormFunction}/>}

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