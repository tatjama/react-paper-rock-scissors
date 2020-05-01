import React from 'react';
import CardMessage from './CardMessage';

class CardBlank extends React.Component{

    componentWillUnmount(){
        alert('Blank component unmount')
    }
    render(){
        return(
            <div className = "game-div">              
                   
                <CardMessage message = "C l i c k &nbsp; o n &nbsp; c a r d!"/>                     
                <div onClick={this.props.onClick} id="player-card" className="icon blank ">
                    <div className="icon-bg">                             
                    </div>
                </div>
            </div>

        )
    }
}

export default CardBlank;