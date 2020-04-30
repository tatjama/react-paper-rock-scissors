import React from 'react';
import GameCard from './GameCard';
import paper from '../images/icon-paper.svg';
import Icon from './Icon';


class PlayerCard extends React.Component{
    render(){
        return(
            <div className="game-div">
                <GameCard url = {paper} name = {this.props.name} message = "Y o u &nbsp; P i c k e d">
                <Icon  name={this.props.name}/>
                    </GameCard>
            </div>
        )
    }
}

export default PlayerCard;