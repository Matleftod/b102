import React from 'react';
import PropTypes from 'prop-types';
import './Accueil.css';

const Accueil = ({ onStartGame }) => {
  return (
    <div className="Accueil">
      <h1>B102</h1>
      <p>Prêt(e) à relever les défis ?</p>
      <button onClick={onStartGame} className="start-game-button">
        Démarrer le jeu
      </button>
    </div>
  );
};

Accueil.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default Accueil;