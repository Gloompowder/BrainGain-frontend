import React from 'react'
import CardsDiv from '../containers/CardsDiv'
import EditDeckCard from './EditDeckCard'

class DeckCards extends React.Component{

    conditionalRender(){
        if (this.props.showCards === true && this.props.editDeck === false ){
            return(
            <CardsDiv 
            toggleShow={this.props.toggleShow}
            editDeck={this.props.editDeck}
            cards={this.props.cards}
            user={this.props.user}
            deck={this.props.deck}/>
        )
        } else if(this.props.showCards === false && this.props.editDeck === true){
             return(
                <EditDeckCard
                toggleShow={this.props.toggleShow}
                editDeck={this.props.editDeck}
                cards={this.props.cards}
                user={this.props.user}
                deck={this.props.deck}/>
             )
        } else {
            return(
                <form className={`${this.props.deck.id}`} >
                <h3>{this.props.deck.name}</h3>
                <button className="Edit" onClick={this.props.editDeck}>Edit</button>
                <button className="Cards" onClick={this.props.toggleShow}>Cards</button>
            </form>
            )
        }
    }


    render(){
        return(
        <div>
            {this.conditionalRender()}
        </div>
        )
    }
}

export default DeckCards