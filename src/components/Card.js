import React from 'react';




class Card extends React.Component{

    myFunction=()=>{
        alert("Clicked card!")
    }
    render(){
        return(
            <div  onClick={this.myFunction}
            className= {"icon "+this.props.name}>
          <div className="icon-bg">              
              <img src = {this.props.url} alt = {this.props.name}/>
          </div>
          </div>
        )
    }
}

export default Card;