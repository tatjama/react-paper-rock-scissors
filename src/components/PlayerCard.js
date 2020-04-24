import React from 'react';
import GameCard from './GameCard';
import paper from '../images/icon-paper.svg';

class PlayerCard extends React.Component{
    render(){
        return(
            <div className="game-div">
                <GameCard url = {paper} name = "paper" message = "Y o u &nbsp; P i c k e d"/>
            </div>
        )
    }
}

export default PlayerCard;