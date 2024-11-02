import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';

const App = () => (
  <div>
    <h1>Welcome to the Rubber Duck Games</h1>
    <a href="#game" onClick={() => document.getElementById('game').scrollIntoView({ behavior: 'smooth' })}>
      Start Duck Hunt Game
    </a>
    <div id="game" style={{ marginTop: '20px' }}>
      <Game />
    </div>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
