import React from 'react';
import Gradient from './Gradient';



class PlayAgain extends React.Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        alert('komponenta play again sa result je montirana')
    }
    render(){
    return(
        <div id="play-again" className="game-div">
            <h2>{this.props.win}</h2>
            <div className="score play-again">
                <p>P l a y &nbsp; A g a i n</p>
                <Gradient id = {this.props.id}/>
            </div>
            
        </div>
    )
    }
    
}

export default PlayAgain;