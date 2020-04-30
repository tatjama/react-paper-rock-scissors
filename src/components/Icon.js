import React from 'react';

class Icon extends React.Component{
    render(){
        return(
            <img id="player-card-image" 
                                src={'../images/icon-'+this.props.name+'.svg'}
                               alt={this.props.name} />
        )
    }
}

export default Icon;