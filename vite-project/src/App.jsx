import React, {useState} from "react";
import RenderComputerMovement from "./logic/brain";
import "./App.css";

function App() {
    const [movement, setMovement] = useState(null);

    function handleClick(item) {
        setMovement(RenderComputerMovement(item));
    }

    return (
        <div id="choiceBar">
            <h1>Rock Paper Scissors</h1>
            <div>
                <a href="#" onClick={() => handleClick("paper")}>
                    <img className="userImg" src="images/paper.png" alt="paper"/>
                </a>
                <a href="#" onClick={() => handleClick("rock")}>
                    <img className="userImg" src="images/rock.png" alt="rock"/>
                </a>
                <a href="#" onClick={() => handleClick("scissors")}>
                    <img className="userImg" src="images/scissors.png" alt="scissors"/>
                </a>
            </div>
            {movement && <div id="computersChoice">{movement}</div>}
        </div>
    );
}

export default App;
