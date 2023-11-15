import React from 'react';
import './SlideGage.css';

const SlideGage = ({
  gage,
  onNextGage,
  onPreviousGage,
  isFirstGage,
  isLastGage,
  onFinishGame,
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
      {!isFirstGage && <button className="pushable" onClick={onPreviousGage}>
        <span className='front slide-btn'>
          Gage précédent
        </span>
      </button>}
      {!isLastGage && <button className="pushable" onClick={onNextGage}>
        <span className='front slide-btn'>
          Gage suivant
        </span>
      </button>}
      {isLastGage && <button className="pushable" onClick={onFinishGame}>
        <span className='front slide-btn'>
          Terminer
        </span>
      </button>}
      {participants.name}
    </div>
  );
};

export default SlideGage;