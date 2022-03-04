import React from 'react'
import CommunityCardDiv from './CommunityCardDiv'

class CommunityDeckCard extends React.Component{
    state={
        toggleCards:false
    }

    toggleCards=()=>{
        this.state.toggleCards ? this.setState({toggleCards: false}):this.setState({toggleCards: true})
    }

    conditionalCommunityCardRender=()=>{
        return(this.state.toggleCards ? <CommunityCardDiv 
            cards={this.props.cards} 
            user={this.props.user} 
            deckUser={this.props.deckUser} 
            deck={this.props.deck} 
            toggleCards={this.toggleCards}/>:
                 <div className="CommunityDeckDiv">
            <h3>{this.props.name}</h3>
        <p>{this.props.deckUser}</p>
        <input type="button" onClick={this.toggleCards} vaue="Cards"/>
        <input type="button" value="Back" onClick={this.props.handleCommuntiyToggle}/>
        <input type="button" value="Add" />
        </div>)
    }
    render(){
        return(
            <div>
                {this.conditionalCommunityCardRender()}
            </div>
        )
    }
}

export default CommunityDeckCard