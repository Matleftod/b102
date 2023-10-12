import React from 'react';
import './SlideGage.css';

const SlideGage = ({
  gage,
  onNextGage,
  onPreviousGage,
  isFirstGage,
  isLastGage,
  onFinishGame,
  handleValidate,
  handleRefuse,
  participants,
  currentParticipantIndex,
}) => {
  const renderGageText = () => {
    if (!gage) {
      return 'Aucun gage disponible';
    }

    return gage.text;
  };

  return (
    <div>
      <h2>{renderGageText()}</h2>
      {!isFirstGage && <button onClick={onPreviousGage}>Gage précédent</button>}
      {!isLastGage && <button onClick={onNextGage}>Gage suivant</button>}
      {isLastGage && <button onClick={onFinishGame}>Terminer</button>}
      {gage && gage.type === 'pot' && (
        <>
          <button onClick={handleValidate}>Valider</button>
          <button onClick={handleRefuse}>Refuser</button>
        </>
      )}
      {participants.name}
    </div>
  );
};

export default SlideGage;