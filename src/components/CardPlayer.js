import React from 'react';
import CardMessage from './CardMessage';

class CardPlayer extends React.Component{
    render(){
        return(
            <div className="game-div">
                     <CardMessage message={this.props.message}/>
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