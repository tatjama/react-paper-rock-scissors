import React from 'react';
import rock from '../images/icon-rock.svg';

class Rock extends React.Component{

    render(){
        const myStyle = {

        
            backgroundColor: "hsl(349, 71%, 52%)",
            boxShadow: "0px 10px  hsla(349, 70%, 56%, 0.7)"      
        }
        return(
            <div style={myStyle} onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"  
                className="icon rock">
                    <div className="icon-bg">
                        <img src= {rock} alt="rock"/>
                    </div>
                </div>
        )
    }
}

export default Rock;