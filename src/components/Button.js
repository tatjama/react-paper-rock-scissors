import React from 'react';

class Button extends React.Component{

    showRules = ()=>{alert("Clicked button to show rules!")}
    render(){
        return(               
        <button onClick={this.showRules}>
            R u l e s
        </button>
  
        )
    }
}

export default Button;