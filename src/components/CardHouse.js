import React from 'react';


class CardHouse extends React.Component{
         

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

export default CardHouse;