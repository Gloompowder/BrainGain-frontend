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
      showCards: false,
      editDeck: false
    }
    this.createDeckForm=this.createDeckForm.bind(this)
    this.newDeck=this.newDeck.bind(this)
    this.createDeck=this.createDeck.bind(this)
    this.toggleShow=this.toggleShow.bind(this)
    this.editDeck=this.editDeck.bind(this)
  }

  url = 'http://localhost:3000/api/v1/users'

  deckURL="http://localhost:3000/api/v1/decks"

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=>this.setState({...this.state, currentUser: userData[0].user, currentDecks: userData[0].decks, currentCards: userData[0].flashcards}))
  }

  createDeckForm(event){
      event.preventDefault()
      this.state.createDeckForm === false ? this.setState({...this.state, createDeckForm: true}) : this.setState({...this.state, createDeckForm: true})
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
          .then(fetch(this.deckURL)
          .then(r=>r.json())
          .then(data=>this.setState({...this.state, currentDecks: data, newDeck : "", createDeckForm:false})))
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
    return (event.target.className === "Edit" ? (this.state.editDeck === false? this.setState({...this.state, editDeck :true}): this.setState({...this.state, editDeck :false})): null)
  }





  render(){
    return (
      <div>
        {this.state.currentUser==={}? <Login handleClick={this.handleClick}/>: <Home 
        user={this.state.currentUser}
        decks={this.state.currentDecks}
        cards={this.state.currentCards}
        createDeckForm={this.state.createDeckForm}
        newDeck={this.state.newDeck}
        createDeckFormFunction={this.createDeckForm}
        createDeckFunction={this.createDeck}
        newDeckFunction={this.newDeck}
        editDeck={this.editDeck}
        toggleShow={this.toggleShow}
        />}
      </div>
    )
  }
}

export default App;
