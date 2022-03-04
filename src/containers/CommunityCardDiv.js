import React from 'react'
import CommunityCardCards from '../components/CommunityCardCards'

class CommunityCardDiv extends React.Component{
    cardRender=()=>{return(this.props.cards.map(card=>card.deck_id === this.props.deck.id ? <CommunityCardCards 
        key={card.id} 
        question={card.question} 
        answer={card.answer}
        toggleCards={this.props.toggleCards}
        />: null))}
    render(){
        return(
            this.cardRender()
        )
    }
}

export default CommunityCardDiv