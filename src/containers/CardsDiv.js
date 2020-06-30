import React from 'react'
import CardsCard from '../components/CardsCard'

class CardsDiv extends React.Component{
    render(){
        return(
            <div>
                {this.props.cards.map(card=>{
                    return(
                        card.map(eachCard=>{
                            return(eachCard.deck_id === this.props.deck.id?<CardsCard 
                                key={eachCard.id}
                                card={eachCard} 
                                user={this.props.user}
                                deck={this.props.deck}
                                toggleShow={this.props.toggleShow}
                                />
                                :null)
                        })
                    )
                })}
                <button onClick={this.props.toggleShow}>Back</button>
            </div>
        )
    }
}

export default CardsDiv