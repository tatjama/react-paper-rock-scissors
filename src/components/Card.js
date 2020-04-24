import React from 'react';
 




class Card extends React.Component{

    pickPlayerCard=()=>{
        
        alert("Player picked card "+this.props.name )
    }
    render(){
        return(
            <div  onClick={this.pickPlayerCard}
            className= {"icon "+this.props.name}>
          <div className="icon-bg">              
              <img src = {this.props.url} alt = {this.props.name}/>
          </div>
          </div>
        )
    }
}

export default Card;