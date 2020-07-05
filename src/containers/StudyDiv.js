import React from 'react'
import StudyCards from '../components/StudyCards'

class StudyDiv extends React.Component{
    render(){console.log(this.props.toggleStudy)
        return(
            <div>
                <h4>{this.props.deck.name}</h4>
                {this.props.cards.map(card=>{
                    return(
                        card.map(eachCard=>{
                            return(eachCard.deck_id === this.props.deck.id?<StudyCards 
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
                <button className="Study" onClick={this.props.toggleStudy}>Back</button>
            </div>
        )
    }
}

export default StudyDiv