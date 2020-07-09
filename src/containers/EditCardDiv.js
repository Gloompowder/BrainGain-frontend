import React from 'react'
import EditCardCards from '../components/EditCardCards.js'

class EditCardDiv extends React.Component{
    state={
        cardArray:[]
    }
    render(){console.log(this.props.status)
        return(
            <div className="EditCardDiv">
                <h4>{this.props.deck.name}</h4>
                {this.props.cards.map(card=>{
                    card[0] ? this.setState({cardArray: [...this.state.cardArray, [...card]]}) : null
                    card[0] !== true ? this.setState({cardArray: [...this.state.cardArray, card]}): null
                        this.state.cardArray.map(eachCard=>{
                            return(eachCard.deck_id === this.props.deck.id?<EditCardCards
                                key={eachCard.id}
                                card={eachCard} 
                                user={this.props.user}
                                deck={this.props.deck}
                                decks={this.props.decks}
                                toggleEditCards={this.props.toggleEditCards}
                                patchRenderCard={this.props.patchRenderCard}
                                editDeckGeneral={this.props.editDeckGeneral}
                                editDeckSupergGeneral={this.props.editDeckSupergGeneral}
                                handleDelete={this.props.handleDelete}
                                toggleEditCardsChild={this.props.toggleEditCardsChild}
                                renderData={this.props.renderData}
                                deleteCard={this.props.deleteCard}
                                submitCard={this.props.submitCard}
                                />
                                :null)
                        })

                })}
                <button onClick={this.props.toggleEditCards}>Back</button>
        </div>
        )
    }
}

export default EditCardDiv

