import React from 'react'

class CardsCard extends React.Component{
    state={
        showAnswer: false
    }

    toggleAnswer=(event)=>{
        event.preventDefault()
        this.state.showAnswer === false ? this.setState({showAnswer: true}): this.setState({showAnswer: false})
    }
    render(){
        return(
            <form>
                <h3>{this.state.showAnswer === false ? this.props.card.question : this.props.card.answer}</h3>
                <button onClick={this.toggleAnswer}>{this.state.showAnswer === false ? "Show Answer":"Show Question"}</button>
            </form>
        )
    }
}

export default CardsCard