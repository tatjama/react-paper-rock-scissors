import React from 'react';

function Score (props){    
        return(
                <div className="score">
                    <p >S c o r e</p>
                    <h1>{props.score}</h1>
                </div>
        )    
}

export default Score;