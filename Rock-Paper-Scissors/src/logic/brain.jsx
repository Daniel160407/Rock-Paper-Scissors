import React from 'react';
import WinnerIdentifyer from "./winnerIdentifyer";

function RenderComputerMovement(item) {
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
    console.log("hello");
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const itemId = random(1, 3);
    const computerItem = itemId === 1 ? "paper" : itemId === 2 ? "rock" : "scissors";
    const result = WinnerIdentifyer(item, computerItem);

    return (
        <div>
            {result}
        </div>
    );
}

export default RenderComputerMovement;