import React from 'react'
import CardsCard from '../components/CardsCard'

class CardsDiv extends React.Component{
    state={
        cardArray:[]
    }
    render(){console.log(this.props.cards)
        return(
            <div className="Cards">
                <h4>{this.props.deck.name}</h4>
                {this.props.cards.map(card=>{
                    card[0] ? this.setState({cardArray: [...this.state.cardArray, [...card]]}) : null
                    card[0] !== true ? this.setState({cardArray: [...this.state.cardArray, card]}): null
                            this.state.cardArray.map(eachCard=>{
                                return(eachCard.deck_id === this.props.deck.id?<CardsCard 
                                    key={eachCard.id}
                                    card={eachCard} 
                                    user={this.props.user}
                                    deck={this.props.deck}
                                    decks={this.props.decks}
                                    />
                                    :null)
                            })
                    })}
                <button onClick={this.props.toggleShow}>Back</button>
            </div>
        )
    }
}

export default CardsDiv