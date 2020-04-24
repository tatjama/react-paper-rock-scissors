import React from 'react';
import Scissors from './Scissors';
import Rock from './Rock';
import Card from './Card';


class Second extends React.Component{
    render(){
        return(
            <div className="section second">
                <div className="first-row">
                   <Card name = "paper"/>                    
                    <Scissors/>
                </div>
                <Rock/>
            </div>
        )
    }
}
export default Second;