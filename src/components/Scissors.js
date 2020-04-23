import React from 'react';
import scissors from '../images/icon-scissors.svg';

class Scissors extends React.Component{
    render(){
        const myStyle  = {        
            backgroundColor:  "hsl(39, 89%, 49%)",
            boxShadow: "0px 10px hsla(40, 84%, 53%, 0.7)"
        }
        return(
            <div style={myStyle} onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"  
                    className="icon scissors">
                        <div className="icon-bg">
                            <img src={scissors} alt="scissors"/>
                        </div>
                    </div>
        )
    }
}

export default Scissors;