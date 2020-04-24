import React from 'react';
import Card from './Card';
import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';


class Second extends React.Component{
    render(){
        return(
            <div className="section second">
                <div className="first-row">
                   <Card url = {paper} name = "paper"/>                    
                    <Card url = {scissors} name = "scissors"/>
                </div>
                <Card url = {rock} name = "rock"/>
            </div>
        )
    }
}
export default Second;