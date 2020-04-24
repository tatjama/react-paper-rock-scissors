import React from 'react';
import './App.css';
import Main from './components/Main';
import StartGame from './components/StartGame';
import Rules from './components/Rules';
import Footer from './components/Footer';


class App extends React.Component{
    render(){
        return(
            <div className = "container">
                <Main/>
                <StartGame/>
                <Footer/>
                <Rules/>
            </div>
        )
    }
}

export default App;