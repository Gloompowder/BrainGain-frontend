import React from 'react'
import NavBar from '../components/NavBar'
import DeckDiv from './DecksDiv'

class Home extends React.Component{
    render(){console.log(this.props)
        return(
            <div>
                <NavBar user={this.props.user}/>
                <DeckDiv {...this.props}/>
            </div>
        )
    }
}

export default Home