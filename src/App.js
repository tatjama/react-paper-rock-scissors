import React from 'react';
import './App.css';
import Main from './components/Main';
import Third from './components/Third';

class App extends React.Component{
    render(){
        return(
            <div className = "container">
                <Main/>
                <Third/>
            </div>
        )
    }
}

export default App;