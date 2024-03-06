function WinnerIdentifyer(userItem, computerItem) {
    const displayResults = (
        <div id="choiceDiv">
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

    if (userItem === "scissors" && computerItem === "rock") {
        return loseMessage;
    } else if (userItem === "rock" && computerItem === "scissors") {
        return winMessage;
    } else if (userItem === "paper" && computerItem === "scissors") {
        return loseMessage;
    } else if (userItem === "scissors" && computerItem === "paper") {
        return winMessage;
    } else if (userItem === "rock" && computerItem === "paper") {
        return loseMessage;
    } else if (userItem === "paper" && computerItem === "rock") {
        return winMessage;
    } else {
        return drawMessage;
    }
}

export default WinnerIdentifyer;
