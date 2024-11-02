import React, { useState, useEffect } from 'react';
import Duck from './Duck.jsx';
import './Game.css';

const Game = () => {
  const [score, setScore] = useState(0);
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDucks((ducks) => [
        ...ducks,
        { id: Date.now(), left: Math.random() * 90, top: Math.random() * 90 },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDuckClick = (id) => {
    setDucks((ducks) => ducks.filter((duck) => duck.id !== id));
    setScore((score) => score + 1);
  };

  return (
    <div className="game">
      <h1>Duck Hunt</h1>
      <p>Score: {score}</p>
      <div className="game-board">
        {ducks.map((duck) => (
          <Duck key={duck.id} id={duck.id} left={duck.left} top={duck.top} onClick={handleDuckClick} />
        ))}
      </div>
    </div>
  );
};

export default Game;
