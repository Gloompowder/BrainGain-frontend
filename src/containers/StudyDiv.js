import React from 'react'
import StudyCards from '../components/StudyCards'

class StudyDiv extends React.Component{
    state={
        randomizedCards:[],
        splice:0
    }


    shuffle=(array)=>{
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
    deckCards=()=>{this.setState({...this.state, randomizedCards: this.shuffle(this.props.cards.filter(card =>card.deck_id === this.props.deck.id))})}

    didComponentMount(){
        this.deckCards()
    }
    previousButton=(event)=>{
        event.preventDefault()
        this.state.splice > 0 ? this.setState({...this.state, splice: this.state.splice - 1}) : this.setState({...this.state, splice: 0})
    }

    nextButton=(event)=>{
        event.preventDefault()
        this.state.splice < this.randomizedCards.length ? this.setState({...this.state, splice: this.state.splice + 1}) : this.setState({...this.state, splice: this.state.randomizedCards.length})
    }

    render(){console.log(this.props.status)
        return(
            <div>
                <h4>{this.props.deck.name}</h4>
                {this.props.cards.map(card=>{
                    return(
                        card[0]? 
                        card.map(eachCard=>{

                            return(eachCard.deck_id === this.props.deck.id && eachCard === this.state.randomizedCards[this.state.splice]?
                            <StudyCards
                                key={eachCard.id}
                                card={eachCard} 
                                user={this.props.user}
                                deck={this.props.deck}
                                decks={this.props.decks}
                                splice={this.state.splice}
                                />
                                :null)


                        }): null
                    )
                })}
                <button className="BacktoDeck" onClick={this.props.handleStudyBack}>Back</button>
            </div>
        )
    }
}

export default StudyDiv