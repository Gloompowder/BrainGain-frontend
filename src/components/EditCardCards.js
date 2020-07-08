import React from 'react'


class EditCardCards extends React.Component{
    state={
        question:"",
        answer:"",
        deck_id: 0
    }

    url="http://localhose:300/api/v1/users"
    cardUrl="http://localhost:3000/api/v1/flashcards"



    handleQuestionChange=(event)=>{
        event.preventDefault()
        this.setState({...this.state, question: event.target.value})
    }

    handleAnswerChange=(event)=>{
        event.preventDefault()
        this.setState({...this.state, answer: event.target.value})
    }

    handleSelect=(event)=>{
        event.preventDefault()
        event.target.value !== this.props.deck.name? this.setState({...this.state, deck_id: this.props.decks.filter(deck=> deck.name === event.target.value)[0].id}): this.setState({...this.state, deck_id: this.props.deck.id})
        console.log(this.state.deck_id)
    }

    // newCardDeckID=(event)=>{
    //     console.log(this.state.deck_id)
    //     return(event.target.value !== 0 ? this.setState({...this.state, deck_id: this.state.currentDecks.filter(deck => deck.name === event.target.value)[0].id})
    //     : null)
    //   }
    

    // createCard=(event)=>{
    //     event.preventDefault()
    //     console.log(this.state.deckID, this.state.answer)
    //     fetch("http://localhost:3000/api/v1/flashcards",{
    //         method: "POST",
    //         headers: {"content-type":"application/json","accept":"application/json"},
    //         body: JSON.stringify({question: this.state.question, answer: this.state.answer, deck_id: this.state.deckID})
    //     })
    //     .then(r=>r.json())
    //     .then(data=>this.setState({...this.state, createCardForm: false, currentCards: [...this.state.currentCards, data]}))
    //   }

    // handleSubmit=(event)=>{
    //     event.preventDefault()
    //     fetch(this.cardUrl+'/'+`${this.props.card.id}`, {
    //         method: "PATCH",
    //         headers: {"content-type":"application/json", "accept":"application/json"},
    //         body: JSON.stringify({question: this.state.question, answer: this.state.answer, deck_id: this.state.deck_id})
    //     })
    //     .then(r=>r.json())
    //     .then(data=> this.props.patchRenderCard(data))
    //     .then(this.props.toggleEditCardsChild())
    // }

    componentDidMount=()=>{
        this.setState({...this.state, deck_id: this.props.deck.id})
    }
    showURL="http://localhost:3000/api/v1/flashcards"+'/'+`${this.props.card.id}`
    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.showURL)
        fetch(this.showURL, {
            method: "PATCH",
            headers: {"content-type":"application/json", "accept":"application/json"},
            body: JSON.stringify({question: this.state.question, answer: this.state.answer, deck_id: this.state.deck_id})
        })
        .then(this.props.renderData())
        .then(this.props.toggleEditCardsChild())
        // console.log(this.state)
    }

    handleDelete=(event)=>{
        event.preventDefault()
        return(this.props.card? 
            fetch(this.cardUrl+"/"+`${this.props.card.id}`, {
                method: "DELETE",
                headers: {"content-type":"application/json", "accept":"application/json"},
            })
            .then(this.props.renderData())
            // .then(this.props.toggleEditCardsChild())
        :null)
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
                        <select name="decks" id="decks" onChange={this.handleSelect}>
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

