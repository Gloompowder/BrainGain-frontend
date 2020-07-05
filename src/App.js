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
    }
    this.createDeckForm=this.createDeckForm.bind(this)
    this.newDeck=this.newDeck.bind(this)
    this.createDeck=this.createDeck.bind(this)
    // this.deleteDeck=this.deleteDeck.bind(this)
  }

  url = 'http://localhost:3000/api/v1/users'

  deckURL="http://localhost:3000/api/v1/decks"


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
  newDeck(event){
      event.preventDefault()
      this.setState({...this.state, newDeck: event.target.value})
  }
  createDeck(event){
      event.preventDefault()
      fetch(this.deckURL, {
          method: "POST",
          headers: {"content-type":"application/json", "accept":"application/json"},
          body: JSON.stringify({name: this.state.newDeck, user_id: this.state.currentUser.id})})
          .then(
            fetch(this.url)
            .then(r=>r.json())
            .then(userData=>this.setState({...this.state,newDeck: "", createDeckForm: false, currentUser: userData[0].user, currentDecks: userData[0].decks, currentCards: userData[0].flashcards})))
          //   fetch(this.url)
          // .then(r=>r.json())
          // .then(data=>this.setState({...this.state, currentDecks: data[0].decks, newDeck : "", createDeckForm:false})))
  }

  conditionalRenderHome(){
    if (this.state.currentUser==={}){return <Login handleClick={this.handleClick}/>}
    else if (this.state.study===true){console.log("studying")}
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
