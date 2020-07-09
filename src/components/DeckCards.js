import React from 'react'
import CardsDiv from '../containers/CardsDiv'
import EditDeckCard from './EditDeckCard'
import StudyDiv from '../containers/StudyDiv'
import EditCardDiv from '../containers/EditCardDiv'
import UnfilledHeart from '../unfilledHeart.png'
import FilledHeart from '../filledHeart.png'

class DeckCards extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showCards: false,
            editDeck: false,
            study: false,
            editDeckIndex: false
        }
        this.toggleShow=this.toggleShow.bind(this)
        this.editDeck=this.editDeck.bind(this)
        this.toggleStudy=this.toggleStudy.bind(this)
        this.editDeckChild=this.editDeckChild.bind(this)
        this.editDeckGeneral=this.editDeckGeneral.bind(this)
        this.toggleEditCards=this.toggleEditCards.bind(this)
    }

    likeButton=()=>{return(this.props.deck.like === false?<img src={FilledHeart} onClick={this.props.handleLike} alt="liked"/>:<img src={UnfilledHeart} onClick={this.props.handleLike} alt="not-liked"/>)}

    toggleShow=(event)=>{
        event.preventDefault()
        if (event.target.className === "Cards"){
            if (this.state.showCards === false){this.setState({...this.state, showCards: true})}
        else {this.setState({showCards: false})}
        }
        this.state.showCards === false ? this.setState({...this.state, showCards: true}) : this.setState({...this.state, showCards: false})
    }
    
    editDeck=(event)=>{
        event.preventDefault()
        // return (event.target.className === "Edit" || event.target.className === "Back" ? this.setState({...this.state, editDeck: true }): this.setState({...this.state,}))
        return(event.target.className === "Edit" ? this.state.editDeck === false ? this.setState({...this.state, editDeck: true}): this.setState({...this.state, editDeck: false}): null)
    }

    editDeckChild=(event)=>{
        event.preventDefault()
        return(event.target.className === "Back" ? this.state.editDeck === false ? this.setState({...this.state, editDeck: true}): this.setState({...this.state, editDeck: false}): null)
    }

    editDeckGeneral=(event)=>{
        event.preventDefault()
        return(this.props.editDeck === false ? this.setState(prevState=>({...prevState, editDeck: true})): this.setState(prevState=>({...prevState, editDeck: false})))
    }

    editDeckSuperGeneral=()=>{
        this.props.editDeck === false ? this.setState(prevState=>({...prevState, editDeckIndex: true})): this.setState(prevState=>({...prevState, editDeckIndex: false}))
    }

    toggleStudy=(event)=>{
    event.preventDefault()
    this.state.study === false ? this.setState({...this.state, editDeck: false, study: true}): this.setState({...this.state, editDeck: true, study: false})
    }

    toggleEditCards=(event)=>{
        event.preventDefault()
        this.state.editDeckIndex === false ? this.setState({...this.state, editDeck: false, editDeckIndex: true}): this.setState({...this.state, editDeck: true, editDeckIndex:false})
    }

    toggleEditCardsChild=()=>{
        this.props.editDeckIndex === false ? this.setState({...this.state, editDeck: false, editDeckIndex: true}): this.setState({...this.state, editDeckIndex:false, editDeck:true})
    }

    handleDelete=(event)=>{
        event.preventDefault()
        return(this.props.card? 
            fetch(this.cardUrl+"/"+`${this.props.card.id}`, {
                method: "DELETE",
                headers: {"content-type":"application/json", "accept":"application/json"},
            })
            .then(this.props.renderData())
            .then(this.setState({...this.state, editDeckIndex: false}))
            :null)
    }

    handleStudyBack=(event)=>{
        event.preventDefault()
        this.setState({...this.state, showCards: true, study: false})
    }


    

    conditionalRender=()=>{
        if (this.state.showCards === true && this.state.editDeck === false && this.state.study === false&& this.state.editDeckIndex=== false){
            return(
                <CardsDiv 
                toggleShow={this.toggleShow}
                editDeck={this.state.editDeck}
                cards={this.props.cards}
                user={this.props.user}
                deck={this.props.deck}
                showCards={this.state.showCards} />
        )
        } else if(this.state.editDeckIndex=== true && this.state.showCards === false && this.state.study === false){
            return(
                <EditCardDiv 
                    cards={this.props.cards}
                    user={this.props.user}
                    deck={this.props.deck}
                    toggleEditCards={this.toggleEditCards} 
                    editDeckIndex={this.state.editDeckIndex} 
                    decks={this.props.decks}
                    editDeck={this.state.editDeck}
                    editDeckGeneral={this.editDeckGeneral}
                    patchRenderCard={this.props.patchRenderCard}
                    editDeckSuperGeneral={this.editDeckSuperGeneral}
                    handleDelete={this.props.handleDelete}
                    toggleEditCardsChild={this.toggleEditCardsChild}
                    renderData={this.props.renderData}
                    deleteCard={this.props.deleteCard}
                    submitCard={this.props.submitCard}
                    status={this.state}
                />
            )
        } else if(this.state.showCards === false && this.state.editDeck === true && this.state.study === false && this.state.editDeckIndex=== false){
            return(
                <EditDeckCard
                editDeck={this.state.editDeck}
                cards={this.props.cards}
                user={this.props.user}
                deck={this.props.deck}
                editDeckFunction={this.editDeck}
                editDeckChild={this.editDeckChild}
                submitEdit={this.props.submitEdit}
                renderData={this.props.renderData}
                editDeckGeneral={this.editDeckGeneral}
                toggleEditCards={this.toggleEditCards} 
                editDeckIndex={this.state.editDeckIndex} 
                patchRender={this.props.patchRender}
                deleteRender={this.props.deleteRender}
                createCardForm={this.props.createCardForm}
                // filterOut={this.props.filterOut}
                />
            )
        } else if(this.state.study === true && this.state.editDeck === false && this.state.showCards === false && this.state.editDeckIndex=== false){
            return(
                <StudyDiv
                    study={this.state.study}
                    cards={this.props.cards}
                    user={this.props.user}
                    deck={this.props.deck}
                    toggleStudy={this.toggleStudy}
                    status={this.state}
                    handleStudyBack={this.handleStudyBack}
                />
            )
        } else {
            return(<card className="DeckCardStyle">
                <form id= "DeckCard" className={`${this.props.deck.id}`} >
                <h3>{this.props.deck.name}</h3>
                {this.likeButton}
                <button className="Edit" onClick={this.editDeck}>Edit</button>
                <button className="Cards" onClick={this.toggleShow}>Cards</button>
                <button className="Study" onClick={this.toggleStudy}>Study</button>
            </form>
            </card>
            )
        }
    }


    render(){
        return(
        <div className="DeckCard">
            {this.conditionalRender()}
        </div>
        )
    }
}

export default DeckCards