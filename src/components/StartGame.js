import React from 'react';
import CardPlayer from './CardPlayer';
import CardBlank from './CardBlank';
import PlayAgain from './PlayAgain';

const paperCard = "paper";
const scissorsCard = "scissors";
const rockCard = "rock";

function newCard(){
    let card;
   let random = ( Math.floor(Math.random()*3)+1);
   switch(random){
       case 1: card = paperCard;
       break;
       case 2: card = scissorsCard;
       break;
       default: card =  rockCard;               
   }
   return card;
}

function whoWin() {            

    return "winner"
}

class StartGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            card: null,
            win: "Who Win?!",
        }
    }

    click=()=>{            
        this.setState({
            show:false,
            card:newCard(),
            win: whoWin(),
        })            
    }

    render(){        
        let houseCard;
            if(this.state.show){
                houseCard = <div className = "game">
                 <CardPlayer name = {this.props.name}/>   
                <CardBlank onClick = {this.click}/> 
                </div>
            }else{               
                houseCard = <div className = "game">
                    <CardPlayer name = {this.props.name}/>
                    <PlayAgain win = {this.state.win}/>
                    <CardPlayer name = {this.state.card}/>
                </div>
            }
            console.log(this.state.show);
            console.log(this.state.card)

        return(
            <div className="start-game">
                {houseCard}
            </div>
        )
    }
}

export default StartGame;