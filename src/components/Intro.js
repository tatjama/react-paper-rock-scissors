import React from 'react';
import Card from './Card';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';
import StartGame from './StartGame';


class Intro extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            show: true,
        }
    }
    //argument is event, anyone because we took  argument from child element, in this case argument is state
    pickPlayerCard=(event)=>{
        console.log(event);
        this.setState({show: false})
            
        
    }

    render(){
       // let myIntro;
        if(this.state.show){        
        return(
            <div className="section second">
                <div className="first-row">
                   <Card 
                   url = {paper} 
                   name = "paper"
                   onClick = {this.pickPlayerCard}
                   />                    
                    <Card 
                    url = {scissors} 
                    name = "scissors"
                    onClick = {this.pickPlayerCard}
                    />
                </div>
                <Card 
                url = {rock} 
                name = "rock"
                onClick = {this.pickPlayerCard}
                />
            </div>
        )
        }else{
            return(<StartGame/>)
        }
    }
}
export default Intro;