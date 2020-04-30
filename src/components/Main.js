import React from 'react';
import Header from './Header';
import Intro from './Intro';

class Main extends React.Component{

    
    /*componentWillUnmount(){
        alert('Component Intro Will Unmounted')
    }*/
    render(){
        return(
            <div className="main">
                <Header/>
                <Intro/>
            </div>

        )
    }
}

export default Main;