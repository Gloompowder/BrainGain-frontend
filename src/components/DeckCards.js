import React from 'react'
import CardsDiv from '../containers/CardsDiv'
import EditDeckCard from './EditDeckCard'
import StudyDiv from '../containers/StudyDiv'

class DeckCards extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showCards: false,
            editDeck: false,
            study: false
        }
        this.toggleShow=this.toggleShow.bind(this)
        this.editDeck=this.editDeck.bind(this)
        this.toggleStudy=this.toggleStudy.bind(this)
        this.editDeckChild=this.editDeckChild.bind(this)
    }

    toggleShow(event){
        event.preventDefault()
        if (event.target.className === "Cards"){
            if (this.state.showCards === false){this.setState({...this.state, showCards: true})}
        else {this.setState({showCards: false})}
        }
        this.state.showCards === false ? this.setState({...this.state, showCards: true}) : this.setState({...this.state, showCards: false})
      }
    
      editDeck(event){
        event.preventDefault()
        // return (event.target.className === "Edit" || event.target.className === "Back" ? this.setState({...this.state, editDeck: true }): this.setState({...this.state,}))
        return(event.target.className === "Edit" ? this.state.editDeck === false ? this.setState({...this.state, editDeck: true}): this.setState({...this.state, editDeck: false}): null)
      }

      editDeckChild(event){
          event.preventDefault()
          return(event.target.className === "Back" ? this.state.editDeck === false ? this.setState({...this.state, editDeck: true}): this.setState({...this.state, editDeck: false}): null)
        }
    
      toggleStudy(event){
        event.preventDefault()
        return(event.target.className === "Study" ? this.state.study === false ? this.setState({...this.state, study: true}): this.setState({...this.state, study: false}): null)
      }

    conditionalRender(){
        if (this.state.showCards === true && this.state.editDeck === false && this.state.study === false){
            return(
                <CardsDiv 
                toggleShow={this.toggleShow}
                editDeck={this.state.editDeck}
                cards={this.props.cards}
                user={this.props.user}
                deck={this.props.deck}
                showCards={this.state.showCards} />
        )
        } else if(this.state.showCards === false && this.state.editDeck === true && this.state.study === false){
             return(
                <EditDeckCard
                editDeck={this.state.editDeck}
                cards={this.props.cards}
                user={this.props.user}
                deck={this.props.deck}
                editDeckFunction={this.editDeck}
                editDeckChild={this.editDeckChild}
                submitEdit={this.props.submitEdit}
                renderData={this.props.renderData}/>
             )
        } else if(this.state.study === true && this.state.editDeck === false && this.state.showCards === false){
            return(
               <StudyDiv
               study={this.state.study}
               cards={this.props.cards}
               user={this.props.user}
               deck={this.props.deck}
               toggleStudy={this.toggleStudy}/>
            )
       } else {
            return(
                <form className={`${this.props.deck.id}`} >
                <h3>{this.props.deck.name}</h3>
                <button className="Edit" onClick={this.editDeck}>Edit</button>
                <button className="Cards" onClick={this.toggleShow}>Cards</button>
                <button className="Study" onClick={this.toggleStudy}>Study</button>
            </form>
            )
        }
    }


    render(){
        return(
        <div>
            {this.conditionalRender()}
        </div>
        )
    }
}

export default DeckCards