import React from 'react';
//import PlayerCard from './PlayerCard';
//import HouseCard from './HouseCard';

class StartGame extends React.Component{
    render(){
        console.log("igrac je igrao "+this.props.name)
        return(
            <div className="start-game">
                <div className="game">
                     {/***PLAYER ICON**/}
                     <div className="game-div">
                        <p>Y o u &nbsp; P i c k e d</p>
    
                        <div id="player-card" className={"icon "+this.props.name}>
                            <div className="icon-bg">
                                <img 
                                id="player-card-image" 
                                alt={"player card is "+this.props.name} 
                                src={require('../images/icon-'+this.props.name+'.svg')}/>
                            </div>
                        </div>    
                    </div>
                    {/**<!--Play again!-->**/}
                    {/*<div id="play-again" className="game-div">
                        <h2>Who win?</h2>
                        <div className="score play-again">
                            <p>P l a y &nbsp; A g a i n</p>
                        </div>
                      </div> */}
                    {/**HOUSE ICON */}
                    {/**<!--BLANK ICON-->**/}
                    <div className = "game-div">
                    <p>C l i c k &nbsp; C a r d </p>
                        <div id="blank" className="icon blank">
                            <div className="icon-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartGame;