import React from 'react';
import PlayerCard from './PlayerCard';
import HouseCard from './HouseCard';

class StartGame extends React.Component{
    render(){
        return(
            <div className="start-game">
                <div className="game">

                     {/***PLAYER ICON**/}
                    <PlayerCard/>

                    {/****Play again! */}
                    <div id="play-again" className="game-div">
                        <h2>Score</h2>
                        <div className="score play-again">
                        <p>P l a y &nbsp A g a i n</p>
                    </div>

                </div>

                {/**HOUSE ICON */}
                <HouseCard/>

            </div>
            </div>
        )
    }
}

export default StartGame;