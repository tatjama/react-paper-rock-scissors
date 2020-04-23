import React from 'react';
import Scissors from './Scissors';
import Rock from './Rock';
import Paper from './Paper';

class Second extends React.Component{
    render(){
        return(
            <div className="section second">
                <div className="first-row">
                   <Paper/>                    
                    <Scissors/>
                </div>
                <Rock/>
            </div>
        )
    }
}
export default Second;