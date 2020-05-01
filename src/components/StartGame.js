import React from 'react';
import CardPlayer from './CardPlayer';
import HouseCard from './HouseCard';
import CardBlank from './CardBlank';

class StartGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
        }
    }

    click=()=>{
        alert('Klinuto blank preko start game')
        this.setState({show:false})
        
    }
    render(){
        console.log("igrac je igrao "+this.props.name)
        let houseCard;
            if(this.state.show){
                houseCard = <CardBlank onClick = {this.click}/> 
            }else{
                houseCard = <HouseCard/>
            }
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