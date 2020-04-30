import React from 'react';

class Icon extends React.Component{
    render(){
        return(
            <img id="player-card-image" 
                                src={this.props.url}
                               alt={this.props.name} />
        )
    }
}

export default Icon;