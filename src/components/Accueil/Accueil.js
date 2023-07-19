import React from 'react';
import PropTypes from 'prop-types';
import './Accueil.css';

const Accueil = ({ onSelectGame }) => {
  return (
    <div className="Accueil" onClick={onSelectGame}>
      <h1>B102</h1>
      <p>Tap to play</p>
    </div>
  );
};

Accueil.propTypes = {
  onSelectGame: PropTypes.func.isRequired,
};

export default Accueil;