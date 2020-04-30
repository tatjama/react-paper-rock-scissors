import React from 'react';
//import GameCard from './GameCard';
import rock from '../images/icon-rock.svg';
import GameCard from './GameCard';

class HouseCard extends React.Component{
    render(){
        return(
            <div className="game-div">                
                <GameCard 
                name = "blank" 
                url={rock} 
                message ="C l i c k &nbsp; o n &nbsp; c a r d!"
                />   
                {/*<GameCard 
                url = ""
                name = 'rock' 
                message = "T h e &nbsp; H o u s e &nbsp; P i c k e d"
                />   */}     
            </div>
        )
    }
}

export default HouseCard;