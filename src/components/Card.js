import React from 'react';
//import Image from './Image';
import paper from '../images/icon-paper.svg';


class Card extends React.Component{
    render(){
        return(
            <div  onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"
        className= {"icon "+this.props.name}>
          <div className="icon-bg">
              
              <img src = {paper} alt = {this.props.name}/>
          </div>
          </div>
        )
    }
}

export default Card;