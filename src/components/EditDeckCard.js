import React from 'react'

class EditDeckCard extends React.Component{
    state={
        deckName:""
    }

    deckURL="http://localhost:3000/decks"

    submitRes=(event)=>{
        event.preventDefault()
        if(event.target.className==="Submit"){
            console.log(this.state.deckName, this.props.deck.id)
        }else if(event.target.className==="Delete"){
        }else if(event.target.className==="Edit Cards"){
        }else if(event.target.className==="Back"){
        }
    }

    deckInput=(event)=>{
        this.setState({deckName: event.target.value})
    }

    render(){
        return(
            <div>
                <form onClick={this.submitRes}>
                    <p>{this.props.deck.name}</p><br></br>
                    <input type="text" name="deckName" placeholder={this.props.deck.name} onChange={this.deckInput} value={this.state.deckName}/><br></br>
                    <input className="Submit" type="submit" value="Submit" /><br></br>
                    <input className="Delete" type="submit" value="Delete" /><br></br>
                    <input className="Edit Cards" type="submit" value="Edit Cards" /><br></br>
                    <input className="Back" type="submit" value="Back" /><br></br>
                </form>
            </div>
        )
    }
}

export default EditDeckCard