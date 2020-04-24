import React from 'react';
import './App.css';
import Main from './components/Main';
import Rules from './components/Rules';
import Footer from './components/Footer';

class App extends React.Component{
    render(){
        return(
            <div className = "container">
                <Main/>
                <Footer/>
                <Rules/>
            </div>
        )
    }
}

export default App;