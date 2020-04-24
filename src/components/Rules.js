import React from 'react';
import close from '../images/icon-close.svg';
import rules from '../images/image-rules.svg';

class Rules extends React.Component{
        hideRules = ()=>{
            alert('Click to hide rules!')
        }
    
    render(){
        return(
            <div className="rules">
                <div className="first-row">
                    <h2>Rules</h2>
                    <img 
                    style={{"width":"20px", "height":"20px"}} 
                    onClick={this.hideRules} 
                    src={close}
                    alt="close" />
                </div>
                <img 
                id="rules-image" 
                src={rules}
                alt="rules" />
            </div>
        )
    }
}

export default Rules;