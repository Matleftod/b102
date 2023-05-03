import React from 'react';
import { useSelector } from 'react-redux'; // Importez useSelector depuis react-redux
import './SlideGage.css';

const SlideGage = ({ gage, onNextGage, onPreviousGage }) => {
  const participants = useSelector((state) => state.participants); // Utilisez le hook useSelector pour accéder aux participants
  console.log(participants)
  const getRandomParticipant = () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    return participants[randomIndex];
  };

  const renderGageText = () => {
    if (!gage) {
      return 'Aucun gage disponible';
    }

    if (gage.player) {
      return gage.text.replace(/\$/g, getRandomParticipant());
    }

    return gage.text;
  };

  return (
    <div>
      <h2>{renderGageText()}</h2>
      <button onClick={onPreviousGage}>Gage précédent</button>
      <button onClick={onNextGage}>Gage suivant</button>
    </div>
  );
};

export default SlideGage;