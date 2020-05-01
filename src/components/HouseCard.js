import React from 'react';
//import GameCard from './GameCard';
//import rock from '../images/icon-rock.svg';
//import GameCard from './GameCard';
import CardMessage from './CardMessage';

class HouseCard extends React.Component{
         

    render(){
        return(
            <div className = "game-div">              
                   
                    <CardMessage message = "T h e &nbsp; H o u s e &nbsp; P i c k e d"/>                     
                    <div id="player-card" className="icon paper ">
                        <div className="icon-bg">                             
                        </div>
                    </div>                
                   
            </div>
        )
    }
}

export default HouseCard;