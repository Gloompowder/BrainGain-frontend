import React from 'react'
import EditCardCards from '../components/EditCardCards.js'

class EditCardDiv extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.deck.name}</h4>
                {this.props.cards.map(card=>{
                    return(
                        card.map(eachCard=>{
                            return(eachCard.deck_id === this.props.deck.id?<EditCardCards 
                                key={eachCard.id}
                                card={eachCard} 
                                user={this.props.user}
                                deck={this.props.deck}
                                decks={this.props.decks}
                                />
                                :null)
                        })
                    )
                })}
                <button onClick={this.props.toggleEditCards}>Back</button>
        </div>
        )
    }
}

export default EditCardDiv

