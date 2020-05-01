import React from 'react';
import CardPlayer from './CardPlayer';
//import HouseCard from './HouseCard';
import CardBlank from './CardBlank';
import PlayAgain from './PlayAgain';

class StartGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            card: null,
        }
    }

    click=()=>{
        function newCard(){
            let card;
           let random = ( Math.floor(Math.random()*3)+1);
           switch(random){
               case 1: card = 'paper';
               break;
               case 2: card = 'scissors';
               break;
               default: card =  'rock';               
           }
           return card;
        }
        alert('Klinuto blank preko start game')
        this.setState({
            show:false,
            card:newCard() ,
        })            
    }
    render(){
        console.log("igrac je igrao "+this.props.name)
        let houseCard;
            if(this.state.show){
                houseCard = <CardBlank onClick = {this.click}/> 
            }else{               
                houseCard = <div>
                    <PlayAgain/>
                    <CardPlayer name = {this.state.card}/>
                </div>
            }
            console.log(this.state.show);
            console.log(this.state.card)

        return(
            <div className="start-game">
                <div className="game" >
                     {/***PLAYER ICON**/}
                     <CardPlayer name = {this.props.name}/>
                    {/**<!--Play again!-->**/}
                    {/* */}
                    {/**HOUSE ICON */}    
                                                   
                         {houseCard}  
                                   
                </div>
            </div>
        )
    }
}

export default StartGame;