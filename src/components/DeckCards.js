import React from 'react'
import CardsDiv from '../containers/CardsDiv'

class DeckCards extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showCards: false
        }
        this.toggleShow=this.toggleShow.bind(this)
    }


    toggleShow(event){
        event.preventDefault()
        if (event.target.className === "Cards"||event.target.className==="Deck"){
            if (this.state.showCards === false){this.setState({showCards: true})}
        else {this.setState({showCards: false})}
        }
        this.state.showCards === false ? this.setState({showCards: true}) : this.setState({showCards: false})
    }
    render(){
        return(
        <div>{(this.state.showCards === true ? <CardsDiv 
        toggleShow={this.toggleShow}
        cards={this.props.cards}
        user={this.props.user}
        deck={this.props.deck}/> :
            <form className={`${this.props.deck.id}`} onClick={this.toggleShow}>
            <h3>{this.props.deck.name}</h3>
            <button>Edit</button>
            <button className="Cards">Cards</button>
        </form>)}
        </div>
        )
    }
}

export default DeckCards