import React from 'react';
function WinnerIdentifyer(userItem, computerItem) {
    const displayResults = (
        <div id='choiceDiv'>
            <div>
                <h1>Your Choice:</h1>
                <img className="messageImg" src={`images/${userItem}.png`} />
            </div>
            <div>
                <h1>Computer's Choice:</h1>
                <img className="messageImg" src={`images/${computerItem}.png`} />
            </div>
        </div>
    );

    const winMessage = (
        <div>
            {displayResults}
            <div>
                <h1 className="winMessage">You win!</h1>
            </div>
        </div>
    );

    const loseMessage = (
        <div>
            {displayResults}
            <div>
                <h1 className="winMessage">You lose!</h1>
            </div>
        </div>
    );

    const drawMessage = (
        <div>
            {displayResults}
            <div>
                <h1 className="drawMessage">It's a draw!</h1>
            </div>
        </div>
    );

    const outcomes={
        "rock": {
            "rock": "draw",
            "paper":  "lose",
            "scissors": "win"
        },
        "paper":{
            "rock": "win",
            "paper": "draw",
            "scissors": "lose"
        },
        "scissors":{
            "rock": "lose",
            "paper": "win",
            "scissors": "draw"
        }
    };

    const outcome=outcomes[userItem][computerItem];
    
    if(outcome==="win"){
        return winMessage;
    }else if(outcome==="lose"){
        return loseMessage;
    }else{
        return drawMessage;
    }
}

export default WinnerIdentifyer;
