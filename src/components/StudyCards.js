import React from 'react'

class StudyCards extends React.Component{
    state={
        showAnswer: false
    }

    toggleAnswer=(event)=>{
        event.preventDefault()
        this.state.showAnswer === false ? this.setState({showAnswer: true}): this.setState({showAnswer: false})
    }



    render(){
        return(
            <form className="studyCard">
                <h3>{this.state.showAnswer === false ? this.props.card.question : this.props.card.answer}</h3>
                <button onClick={this.toggleAnswer}>{this.state.showAnswer === false ? "Show Answer":"Show Question"}</button>
                <input type="button" value="previousButton" onClick={this.props.previousButton}></input>
                <input type="button" value="nextButton" onClick={this.props.nextButton}></input>
            </form>
        )
    }
}

export default StudyCards