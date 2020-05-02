import React from 'react';
import CardPlayer from './CardPlayer';
import CardBlank from './CardBlank';
import PlayAgain from './PlayAgain';


const paperCard = "paper";
const scissorsCard = "scissors";
const rockCard = "rock";
const win = "win";
const lose = "lose";
const equal = "equal";

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

function calculateWinner(player, card) {
    if(player === card){
        return equal;
    }else if(
        (player === paperCard && card === rockCard) ||
        (player === scissorsCard && card === paperCard) ||
        (player === rockCard && card === scissorsCard)  
              ){
                return win;
              }else if(
                (player === paperCard && card === scissorsCard) ||
                (player === scissorsCard && card === rockCard) ||
                (player === rockCard && card === paperCard)
              ){
                  return lose;
              }
                   return null; 
}

class StartGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            player: props.name,
            show:true,
            card: null,
        }
    }

    click=()=>{     
        this.setState({            
            show:false,
            card:newCard(),           
        })            
    }
    render(){
       //console.log(this.state.player);
         //   console.log(this.state.show);
           // console.log(this.state.card);
        const winner = calculateWinner(this.state.player, this.state.card);
        console.log(winner);
               
        let houseCard;
            if(this.state.show){
                houseCard = <div className = "game">
                 <CardPlayer name = {this.props.name} message="Y o u &nbsp; P i c k e d"/>   
                <CardBlank onClick = {this.click}/> 
                </div>
            }else{               
                houseCard = <div className = "game">
                    <CardPlayer name = {this.props.name} message="Y o u &nbsp; P i c k e d"/>
                    <PlayAgain win = {`you ${winner}`} id = {winner}/>
                    <CardPlayer name = {this.state.card} message="T h e &nbsp; h o u s e &nbsp; P i c k e d"/>
                    
                </div>
            }
            
        return(
            <div className="start-game">
                {houseCard}
            </div>
        )
    }
}



export default StartGame;

