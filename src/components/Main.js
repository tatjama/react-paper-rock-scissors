import React from 'react';
import Header from './Header';
import Intro from './Intro';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            score:0,
        }
    }
    
   
    render(){
        return(
            <div className="main">
                <Header score = {this.state.score}/>
                <Intro/>
            </div>

        )
    }
}

export default Main;