import React from 'react';
import './SlideGage.css';

const SlideGage = ({
  gage,
  onNextGage,
  onPreviousGage,
  isFirstGage,
  isLastGage,
  onFinishGame,
}) => {

  const renderGageText = () => {
    if (!gage) {
      return 'Aucun gage disponible';
    }

    return gage;
  };

  return (
    <div>
      <h2>{renderGageText()}</h2>
      {!isFirstGage && <button onClick={onPreviousGage}>Gage précédent</button>}
      {!isLastGage && <button onClick={onNextGage}>Gage suivant</button>}
      {isLastGage && <button onClick={onFinishGame}>Terminer</button>}
    </div>
  );
};

export default SlideGage;