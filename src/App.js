import React from 'react';
import './App.css';
import Home from './containers/Home'
import Login from './components/Login'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      currentUser:{},
      currentDecks:[],
      currentCards:[],
      newUser:{},
      cardOrder:[],
      newDeck:"",
      createDeckForm: false,
      createCardForm: false,
      question:"",
      answer:"",
      deckID:0,
      home: false
    }
    this.createDeckForm=this.createDeckForm.bind(this)
    this.newDeck=this.newDeck.bind(this)
    this.createDeck=this.createDeck.bind(this)
    // this.newCardDeckID=this.newCardDeckID(this)
    // this.newCardQuestion=this.newCardQuestion(this)
    // this.newCardAnswer=this.newCardAnswer(this)
  }

  url = 'http://localhost:3000/api/v1/users'

  deckURL="http://localhost:3000/api/v1/decks"

  cardUrl="http:localhost:3000/api/v1/cards"

  deleteCard=(object)=>{

    this.setState({...this.state, currentCards: [...this.state.currentCards].map(decksCards=>decksCards.filter(card => card.id !== object.id))})

  }

  submitCard=(object)=>{

    this.setState({...this.state, currentCards: [...[...this.state.currentCards].map(deckCards=> deckCards[0] ? deckCards.filter(deck=>deck.id !== object.id): [...this.state.currentCards].filter(deck=>deck.id !== object.id)), object]})
    console.log(this.state.currentCards)
  }

    handleLike=(event)=>{
      event.preventDefault()
      fetch("http://localhost:3000/api/v1/decks"+'/'+ `${this.props.deck.id}`,{
        method: "PATCH",
        headers:{"content-type":"application/json", "accept":"application/json"},
        body: JSON.stringify({name: this.props.deck.name, id: this.props.deck.id, user_id: this.props.deck.user_id, like: this.props.deck.like === true ? false:true})
      })
      .then(r=>r.json())
      .then(data=>this.setState({...this.state, currentDecks: [...this.state.currentDecks.filter(deck=> deck.id === data.id), data]}))
    }

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=>this.setState({...this.state, currentUser: userData[0].user, currentDecks: userData[0].decks, currentCards: userData[0].flashcards}))
  }

  renderData=()=>{
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=>this.setState({...this.state, currentUser: userData[0].user, currentDecks: userData[0].decks, currentCards: userData[0].flashcards}))
  }

  createDeckForm(event){
      event.preventDefault()
      this.state.createDeckForm === false ? this.setState({...this.state, createDeckForm: true}) : this.setState({...this.state, createDeckForm: false})
  }

  createCardForm=(event)=>{
    event.preventDefault()
    this.state.createCardForm === false ? this.setState({...this.state, createCardForm: true}) : this.setState({...this.state, createCardForm: false})
  }

  newDeck(event){
      event.preventDefault()
      this.setState({...this.state, newDeck: event.target.value})
  }

  newCardAnswer=(event)=>{
    this.setState({...this.state, answer: event.target.value})
  }

  newCardQuestion=(event)=>{
    this.setState({...this.state, question: event.target.value})
  }

  newCardDeckID=(event)=>{
    // this.setState({...this.state, deck_id: event.target.value})
    // this.setState({...this.state, deck_id: this.state.currentDecks.filter(deck => deck.name === this.state.deck_id)})
    // console.log(this.state.question, this.state.answer, this.state.deck_id)
    // this.setState(...this.state, this.state.deck_id: this.state.currentDecks.filter(deck => deck.name === event.target.value)[0].id)
    return(event.target.value !== 0 ? this.setState({...this.state, deckID: this.state.currentDecks.filter(deck => deck.name === event.target.value)[0].id})
    : null)
    // return(this.state.currentDecks.filter(deck => deck.name === event.target.value)[0].id)
  }

  createCard=(event)=>{
    event.preventDefault()
    fetch("http://localhost:3000/api/v1/flashcards",{
        method: "POST",
        headers: {"content-type":"application/json","accept":"application/json"},
        body: JSON.stringify({question: this.state.question, answer: this.state.answer, deck_id: this.state.deckID, name: ""})
    }).then(r=>r.json())
    .then(data=>this.setState({...this.state, createCardForm: false, currentCards:[...this.state.currentCards, data]}))
  }


  createDeck=(event)=>{
      event.preventDefault()
      fetch(this.deckURL, {
          method: "POST",
          headers: {"content-type":"application/json", "accept":"application/json"},
          body: JSON.stringify({name: this.state.newDeck, like: false, user_id: this.state.currentUser.id})})
          .then(
            fetch(this.url)
            .then(r=>r.json())
            .then(this.renderData())
            .then(this.setState({...this.state, createDeckForm: false})))
          //   fetch(this.url)
          // .then(r=>r.json())
          // .then(data=>this.setState({...this.state, currentDecks: data[0].decks, newDeck : "", createDeckForm:false})))
  }

  patchRender=(object)=>{
    this.setState({...this.state, currentDecks: [...this.state.currentDecks.filter(element => element.id !== object.id), object]})
    // this.setState({...this.state, currentDecks: [this.state.currentDecks.map(deck => if )]})
  }

  patchRenderCard=(object)=>{
    this.setState({...this.state, currentCards: [...this.state.currentCards.filter(element=>element.id !== object.id), object]})
  }

  deleteRender=(object)=>{
    this.setState({...this.state, currentDecks: [...this.state.currentDecks.filter(element => element.id !== object.id)]})
  }

  handleLogout=(event)=>{
    event.preventDefault()
    this.setState({...this.state, currentUser: {}})
  }

  toggleHome=()=>{this.state.home === false ? this.setState({...this.state, home: true}): this.setState({...this.state, home: false})}



  // handleCommunity=(event)=>{
  //   event.preventDefault()
  //   this.state.community === false ? this.setState({...this.state, community: true, })
  // }

  // filterOut=(object)=>{this.setState({...this.state, currentCards:[...this.state.currentCards.filter(card=>card.id !== object.id)]})}

  conditionalRenderHome(){
    if (this.state.currentUser==={}){return <Login handleClick={this.handleClick} user={this.state.currentUser}/>}
    else {return <Home 
      user={this.state.currentUser}
      decks={this.state.currentDecks}
      cards={this.state.currentCards}
      createDeckForm={this.state.createDeckForm}
      newDeck={this.state.newDeck}
      createDeckFormFunction={this.createDeckForm}
      createDeckFunction={this.createDeck}
      newDeckFunction={this.newDeck}
      submitEdit={this.submitEdit}
      renderData={this.renderData}
      patchRender={this.patchRender}
      deleteRender={this.deleteRender}
      createCardFormFunction={this.createCardForm}
      createCardForm={this.state.createCardForm}
      newCardAnswer={this.state.answer}
      newCardQuestion={this.state.question}
      newCardDeckID={this.state.deckID}
      handleNewCardAnswer={this.newCardAnswer}
      handleNewCardQuestion={this.newCardQuestion}
      handleNewCardDeckID={this.newCardDeckID}
      createCard={this.createCard}
      patchRenderCard={this.patchRenderCard}
      handleDelete={this.handleDelete}
      handleLogout={this.handleLogout}
      deleteCard={this.deleteCard}
      submitCard={this.submitCard}
      handleLike={this.handleLike}
      />}
  }

  render(){
    return (
      <div>
        {this.conditionalRenderHome()}
      </div>
    )
  }
}

export default App;
