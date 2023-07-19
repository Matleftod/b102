import React from 'react';
import PropTypes from 'prop-types';
import './SelectGame.css';

const SelectGame = ({ onStartGame }) => {
  return (
    <div className="select-game-container">
      <button class="pushable picolade-btn" onClick={onStartGame}>
        <span class="front picolade">
          Picolade
        </span>
      </button>
      <button class="pushable soon-btn" onClick={onStartGame}>
        <span class="front soon">
          Soon
        </span>
      </button>
      <button class="pushable soon-btn" onClick={onStartGame}>
        <span class="front soon">
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