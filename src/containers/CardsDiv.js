import React from 'react'
import CardsCard from '../components/CardsCard'

class CardsDiv extends React.Component{
    render(){console.log(this.props.cards)
        const cardArray = this.props.cards.flatMap(thing=>{
            if (Array.isArray(thing)){
                return(thing)
            }
            else{
                return[thing]
            }
        })
        return(
            <div className="Cards">
                <h4>{this.props.deck.name}</h4>
                    {cardArray.map(eachCard=>{
                        return(eachCard.deck_id === this.props.deck.id?<CardsCard 
                            key={eachCard.id}
                            card={eachCard} 
                            user={this.props.user}
                            deck={this.props.deck}
                            decks={this.props.decks}
                            />
                            :null)
                    })
                    }
                <button onClick={this.props.toggleShow}>Back</button>
            </div>
        )
    }
}

export default CardsDiv