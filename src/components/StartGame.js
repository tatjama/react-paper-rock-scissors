import React from 'react';
import CardPlayer from './CardPlayer';
import HouseCard from './HouseCard';
import CardBlank from './CardBlank';

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
                houseCard = <HouseCard/>
            }
            console.log(this.state.show);
            console.log(this.state.card)

        return(
            <div className="start-game">
                <div className="game" >
                     {/***PLAYER ICON**/}
                     <CardPlayer name = {this.props.name}/>
                    {/**<!--Play again!-->**/}
                    {/*<div id="play-again" className="game-div">
                        <h2>Who win?</h2>
                        <div className="score play-again">
                            <p>P l a y &nbsp; A g a i n</p>
                        </div>
                      </div> */}
                    {/**HOUSE ICON */}    
                    <div >                                 
                         {houseCard}  
                    </div>                 
                </div>
            </div>
        )
    }
}

export default StartGame;