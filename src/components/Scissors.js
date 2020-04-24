import React from 'react';
import scissors from '../images/icon-scissors.svg';


class Scissors extends React.Component{
    render(){
       
        return(
            <div onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"  
                    className="icon scissors">
                        <div className="icon-bg">
                            <img src={scissors} alt="scissors"/>
                        </div>
                    </div>
        )
    }
}

export default Scissors;