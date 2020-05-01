import React from 'react';

class GameCard extends React.Component{
    render(){
        
        return(
            <div className="gameCard">
                    <p >{this.props.message}</p>    
                    <div id="player-card" className={"icon "+this.props.name}>
                        <div className="icon-bg">
                             
                        </div>
                    </div>    
                </div>                 
        )
    }
}

export default GameCard;