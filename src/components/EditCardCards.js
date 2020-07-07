import React from 'react'


class EditCardCards extends React.Component{
    state={
        question:"",
        answer:"",
        deck_id: 0
    }

    url="http://localhose:300/api/v1/users"
    deckUrl="http://localhost:3000/api/v1/cards"



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

    handleSubmit(event){
        event.preventDefault()
    }

    handleDelete(event){
        event.preventDefault()
        fetch(this.deckUrl+"/"+`${this.props.deck.id}`, {
            method: "DELETE",
            headers: {"content-type":"application/json", "accept":"application/json"},
        })
    }

    // otherDecks=()=>{this.props.decks.filter(otherDeck=>otherDeck.id!==this.props.card.deck_id).map(deck=>{return(<option className={deck.user_id} value={"Deck" + deck + ": " + deck.name}/>)})}

    submitEdit(){}
    render(){
        return(
            <div>
                <form>
                    <label name="Question" value="Question"></label>
                    <input type="text-area" onChange={this.handleQuestionChange} placeholder={this.props.card.question} value={this.state.question}/>
                    <label name="Answer" value="Answer"></label>
                    <input type="text-area" onChange={this.handleAnswerChange} placeholder={this.props.card.answer} value={this.state.answer} />
                        <select name="decks" id="decks">
                            {<option value={this.props.deck.name} className={this.props.deck.id} >{this.props.deck.name}</option>}
                            {this.props.decks.filter(otherDeck=>otherDeck !== this.props.deck).map(deck=><option key={deck.id} className={deck.id} value={deck.name}>{deck.name}</option>)}
                        </select>
                    <input type="submit" onClick={this.handleSubmit} value="Submit" />
                    <input type="submit" onClick={this.handleDelete} value="Delete" />
                </form>
            </div>
        )
    }
}

export default EditCardCards

