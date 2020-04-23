import React from 'react';
import First from './First';
import Second from './Second';

class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <First/>
                <Second/>
            </div>

        )
    }
}

export default Main;