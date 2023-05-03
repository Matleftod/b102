import React from 'react';
import './SlideGage.css';

const SlideGage = ({ gage, onNextGage, onPreviousGage }) => {

  const renderGageText = () => {
    if (!gage) {
      return 'Aucun gage disponible';
    }

    return gage;
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