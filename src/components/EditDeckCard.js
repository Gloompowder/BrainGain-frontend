import React from 'react'

class EditDeckCard extends React.Component{
    state={
        deckName:""
    }

    deckURL="http://localhost:3000/api/v1/decks"
    url="http://localhose:3000/api/v1/users"



    deckInput=(event)=>{
        this.setState({deckName: event.target.value})
    }

    deleteDeck=(event)=>{
        event.preventDefault()
        this.props.deleteRender(this.props.deck)
        fetch(this.deckURL + '/'+`${this.props.deck.id}`, {
            method: 'DELETE',
            headers:{'content-type':'application/json', 'accept':'application/json'}
        })
        .then(this.props.editDeckGeneral(event))
        // fetch(this.deckURL+this.s)
    }

    submitDeck=(event)=>{
        event.preventDefault()
        fetch(this.deckURL + '/'+`${this.props.deck.id}`, {
            method: "PATCH",
            headers:{'content-type':'application/json', 'accept':'application/json'},
            body: JSON.stringify({user_id: this.props.user.id, name: this.state.deckName})}
        )
        .then(r=>r.json())
        .then(data=>this.props.patchRender(data))
        .then(this.props.editDeckGeneral(event))
    }

    

    render(){
        return(
            <div>
                <form >
                    <h3>{this.props.deck.name}</h3><br></br>
                    <input type="text" name="deckName" placeholder={this.props.deck.name} onChange={this.deckInput} value={this.state.deckName}/><br></br>
                    <input className="Submit" onClick={this.submitDeck} type="submit" value="Submit" /><br></br>
                    <input className="Edit Cards" onClick={this.props.toggleEditCards} type="submit" value="Edit Cards" /><br></br>
                    <input className="Delete" onClick={this.deleteDeck} type="submit" value="Delete" /><br></br>
                    <input className="Back" onClick={this.props.editDeckGeneral} type="submit" value="Back" /><br></br>
                </form>
            </div>
        )
    }
}

export default EditDeckCard