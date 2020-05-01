import React from 'react';
import Card from './Card';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';
import StartGame from './StartGame';

const paperCard = "paper";
const rockCard = "rock";
const scissorsCard = "scissors";

class Intro extends React.Component{    
    constructor(props){
        super(props);
        this.state={
            show: true,
            card: null
        }
    }
    
    //argument is event, anyone because we took  argument from child element, in this case argument is state
    pickPlayerCard=(event)=>{
        console.log(event);
        this.setState({card:event})
        this.setState({show: false})       
    }

    render(){
       
        if(this.state.show){        
        return(
            <div className="section second">
                <div className="first-row">
                   <Card 
                   url = {paper} 
                   name = {paperCard}
                   onClick = {this.pickPlayerCard}
                   />                    
                    <Card 
                    url = {scissors} 
                    name = {scissorsCard}
                    onClick = {this.pickPlayerCard}
                    />
                </div>
                <Card 
                url = {rock} 
                name = {rockCard}
                onClick = {this.pickPlayerCard}
                />
            </div>
        )
        }else{
            return(<StartGame name ={this.state.card} />)
        }
    }
}
export default Intro;