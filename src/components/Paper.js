import React from 'react';
import paper from '../images/icon-paper.svg';

class Paper extends React.Component{
    render(){
        const myStyle = {
            backgroundColor: "hsl(230, 89%, 62%)",
            boxShadow: "  0px 10px hsla(230, 89%, 65%, 0.7)"
        }
        
        return(
            <div style={myStyle} onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"
            className="icon paper">
              <div className="icon-bg">
                  <img src={paper} alt="paper" />
              </div>
              </div>  
        )
    }
}

export default Paper;