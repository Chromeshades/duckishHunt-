import React from 'react';
import './Duck.css';

const Duck = ({ id, left, top, onClick }) => {
  return (
    <div
      className="duck"
      style={{ left: `${left}%`, top: `${top}%` }}
      onClick={() => onClick(id)}
    >
      🦆
    </div>
  );
};

export default Duck;
