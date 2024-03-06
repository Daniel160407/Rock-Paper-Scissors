import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RenderComputerMovement from './logic/brain';
import WinnerIdentifyer from './logic/winnerIdentifyer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);