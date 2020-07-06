import React from 'react'


class EditCardCards extends React.Component{
    state={
        question:"",
        answer:"",
        deck_id: 0
    }

    handleQuestionChange(event){
        event.preventDefault()
        this.setState({...this.state, question: event.target.value})
    }

    handleAnswerChange(event){
        event.preventDefault()
        this.setState({...this.state, answer: event.target.value})
    }

    handleSelect(event){
        event.preventDefault()
    }

    filterDeck=()=>{this.props.decks.filter(otherDeck=>otherDeck.id!==this.props.deck.id)}

    submitEdit(){}
    render(){console.log(this.filterDeck)
        return(
            <div>
                <form>
                    <label name="Question" value="Question"></label>
                    <input type="text-area" onChange={this.handleQuestionChange} placeholder={this.props.card.question} value={this.state.question}/>
                    <label name="Answer" value="Answer"></label>
                    <input type="text-area" onChange={this.handleAnswerChange} placeholder={this.props.card.answer} value={this.state.answer} />
                    <select name="cars" id="cars" onChange={this.handleSelect}>
                        <option className={this.props.deck.user_id} value={"Deck" + this.props.deck.id + ": " + this.props.deck.name} />
                        {this.filterDeck.map(deck=>{
                            return(<option className={deck.user_id} value={"Deck" + deck + ": " + deck.name}/>)
                        })}
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default EditCardCards

