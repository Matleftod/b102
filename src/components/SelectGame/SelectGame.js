import React from 'react';
import PropTypes from 'prop-types';
import './SelectGame.css';

const SelectGame = ({ onStartGame }) => {
  return (
    <div className="select-game-container">
      <button className="pushable picolade-btn" onClick={onStartGame}>
        <span className="front picolade">
          Picolade
        </span>
      </button>
      <button className="pushable soon-btn" onClick={onStartGame}>
        <span className="front soon">
          Soon
        </span>
      </button>
      <button className="pushable soon-btn" onClick={onStartGame}>
        <span className="front soon">
          Soon
        </span>
      </button>
    </div>
  );
};

SelectGame.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default SelectGame;