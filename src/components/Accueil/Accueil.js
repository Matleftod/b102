import React from 'react';
import PropTypes from 'prop-types';
import './Accueil.css';
import logo from '../../images/logo_b102.png';

const Accueil = ({ onSelectGame }) => {
  return (
    <div className="Accueil" onClick={onSelectGame}>
      <img className="logo_acceuil" src={logo} alt="logo b102" />
      <p>Tap to play</p>
    </div>
  );
};

Accueil.propTypes = {
  onSelectGame: PropTypes.func.isRequired,
};

export default Accueil;