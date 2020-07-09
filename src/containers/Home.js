import React from 'react'
import NavBar from '../components/NavBar'
import DeckDiv from './DecksDiv'

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
                <DeckDiv {...this.props}/>
            </div>
        )
    }
}

export default Home