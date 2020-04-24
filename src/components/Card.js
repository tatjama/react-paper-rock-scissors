import React from 'react';




class Card extends React.Component{
    render(){
        return(
            <div  onclick="pickCardPlayer(this, 5, pickCardHouse, playAgain, '.second')"
        className= {"icon "+this.props.name}>
          <div className="icon-bg">              
              <img src = {this.props.url} alt = {this.props.name}/>
          </div>
          </div>
        )
    }
}

export default Card;