import React from 'react';
import PropTypes from 'prop-types';
import './SelectGame.css';

const SelectGame = ({ onStartGame }) => {
  return (
    <div className="SelectGame">
      <button onClick={onStartGame} className="game-button">
        Jeu 1
      </button>
      <button className="game-button">
        Jeu 2
      </button>
      <button className="game-button">
        Jeu 3
      </button>
      <button className="game-button">
        Jeu 4
      </button>
    </div>
  );
};

SelectGame.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default SelectGame;