import React from 'react'
import StudyCards from '../components/StudyCards'

const shuffle=(array)=>{
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}


class StudyDiv extends React.Component{
    cardArray = this.props.cards.flatMap(thing=>{
        if (Array.isArray(thing)){
            return(thing)
        }
        else{
            return[thing]
        }
    })

    state={
        randomizedCards: shuffle(this.cardArray).filter(card => card.deck_id === this.props.deck.id),
        splice:0,
        cardArray:[]
    }



    // deckCards=()=>{this.setState({...this.state, randomizedCards: this.shuffle(this.props.cards.map(deckCards=>deckCards.filter(card =>card.deck_id === this.props.deck.id)))})}

    // didComponentMount(){
    //     this.deckCards()
    // }

    previousButton=(event)=>{
        event.preventDefault()
        this.state.splice > 0 ? this.setState({...this.state, splice: this.state.splice - 1}) : this.setState({...this.state, splice: 0})
    }

    nextButton=(event)=>{
        event.preventDefault()
        this.setState({splice:Math.min(this.state.randomizedCards.length - 1, this.state.splice + 1)})
    }





    render(){const currentCard = this.state.randomizedCards[this.state.splice]
        return(
            <div>
                <h4>{this.props.deck.name}</h4>
                        <StudyCards
                            card={currentCard} 
                            user={this.props.user}
                            deck={this.props.deck}
                            decks={this.props.decks}
                            splice={this.state.splice}
                            previousButton={this.previousButton}
                            nextButton={this.nextButton}
                            />
                <button className="BacktoDeck" onClick={this.props.toggleStudy}>Back</button>
            </div>
        )
    }
}

export default StudyDiv