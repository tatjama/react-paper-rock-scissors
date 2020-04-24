import React from 'react';
import paper from '../images/icon-paper.svg';

class Paper extends React.Component{
    render(){        
        
        return(
            <div  onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"
            className="icon paper">
              <div className="icon-bg">
                  <img src={paper} alt="paper" />
              </div>
              </div>  
        )
    }
}

export default Paper;