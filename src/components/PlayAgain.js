import React from 'react';

function PlayAgain(props) {
    return(
        <div id="play-again" className="game-div">
            <h2>{props.win}</h2>
            <div className="score play-again">
                <p>P l a y &nbsp; A g a i n</p>
            </div>
        </div>
    )
    
}

export default PlayAgain;