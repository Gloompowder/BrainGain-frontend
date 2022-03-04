import React from 'react'
import NavBar from '../components/NavBar'
import DeckDiv from './DecksDiv'
import CommunityDiv from './CommunityDiv'

class Home extends React.Component{
    componentRender=()=>{
        return(this.props.community === true? <CommunityDiv 
        allDecks={this.props.allDecks}
        allCards={this.props.allCards}
        allUsers={this.props.allUsers}
        user={this.props.user}
        decks={this.props.decks}
        cards={this.props.cards}
        toggleCommunity={this.props.toggleCommunity}
    />:<DeckDiv {...this.props}/>)}
    render(){
        return(
            <div>
                <NavBar 
                user={this.props.user} 
                handleLogout={this.props.handleLogout} 
                communityTrue={this.props.communityTrue} 
                communityFalse={this.props.communityFalse}/>
                {this.componentRender()}
            </div>
        )
    }
}

export default Home