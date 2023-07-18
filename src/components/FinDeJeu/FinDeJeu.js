import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FinDeJeu.css';

const FinDeJeu = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Fin du jeu</h1>
      <p>Merci d'avoir joué !</p>
      <button onClick={handleGoHome}>Retour à l'accueil</button>
    </div>
  );
};

export default FinDeJeu;