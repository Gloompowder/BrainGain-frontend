import React from 'react';
import './App.css';
import Home from './containers/Home'
import Login from './components/Login'

class App extends React.Component{
  state ={
    currentUser:{},
    currentDecks:[],
    currentCards:[],
    newUser:{},
    cardOrder:[],
    showCards: false
  }
  url = 'http://localhost:3000/api/v1/users'

  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(userData=>this.setState({...this.state, currentUser: userData[0].user, currentDecks: userData[0].decks, currentCards: userData[0].flashcards}))
  }

  handleClick=(event)=>{
    event.preventDefault()
    this.setState({...this.state, newUser: {username: event.target.username, email: event.target.email, password: event.target.password}})
    fetch(this.url, {
      method: 'POST',
      headers: {'content-type':'application/json', 'accept':'application/json'},
      body: JSON.stringify(this.state.newUser)
    })
    .then(
      fetch(this.url)
    .then(r=>r.json())
    .then(userData=>this.setState({...this.state, currentUser: userData.user, currentDecks: userData.decks, currentCards: userData.flashcards}))
    )
  }

  render(){
    return (
      <div>
        {this.state.currentUser==={}? <Login handleClick={this.handleClick}/>: <Home 
        user={this.state.currentUser}
        decks={this.state.currentDecks}
        cards={this.state.currentCards}/>}
      </div>
    )
  }
}

export default App;
