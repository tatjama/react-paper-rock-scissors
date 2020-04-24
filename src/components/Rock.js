import React from 'react';
import rock from '../images/icon-rock.svg';

class Rock extends React.Component{

    render(){
       
        return(
            <div onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"  
                className="icon rock">
                    <div className="icon-bg">
                        <img src= {rock} alt="rock"/>
                    </div>
                </div>
        )
    }
}

export default Rock;