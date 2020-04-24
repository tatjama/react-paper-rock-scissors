import React from 'react';
import './App.css';
import Main from './components/Main';
import Third from './components/Third';
import Rules from './components/Rules';

class App extends React.Component{
    render(){
        return(
            <div className = "container">
                <Main/>
                <Third/>
                <Rules/>
            </div>
        )
    }
}

export default App;