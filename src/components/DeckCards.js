import React from 'react'

class DeckCards extends React.Component{
    render(){
        return(
            <card>
                <form>
                    <h3>{this.props.deck.name}</h3>
                </form>
            </card>
        )
    }
}

export default DeckCards