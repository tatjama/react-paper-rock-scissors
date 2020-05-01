import React from 'react';
import CardMessage from './CardMessage';
//import GameCard from './GameCard';
//import paper from '../images/icon-paper.svg';
//import Icon from './Icon';


class CardPlayer extends React.Component{
    render(){
        return(
            <div className="game-div">
                     <CardMessage message="Y o u &nbsp; P i c k e d"/>
                    <div id="player-card">
                        <div className={"icon "+this.props.name}>
                            <div className="icon-bg">
                                <img 
                                id="player-card-image" 
                                alt={"player card is "+this.props.name} 
                                src={require('../images/icon-'+this.props.name+'.svg')}/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CardPlayer;