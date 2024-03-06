import React, { useState } from "react";
import RenderComputerMovement from "./logic/brain";
import WinnerIdentifyer from "./logic/winnerIdentifyer";

function App() {
  const [movement, setMovement] = useState(null);

  function handleClick(item) {
    setMovement(RenderComputerMovement(item));
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div>
        <a href="#" onClick={() => handleClick("paper")}>
          <img src="images/paper.png" alt="paper" />
        </a>
        <a href="#" onClick={() => handleClick("rock")}>
          <img src="images/rock.png" alt="rock" />
        </a>
        <a href="#" onClick={() => handleClick("scissors")}>
          <img src="images/scissors.png" alt="scissors" />
        </a>
      </div>
      {movement && <div id="computersChoice">{movement}</div>}
    </div>
  );
}

export default App;
