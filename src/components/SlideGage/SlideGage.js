import React from 'react';
import './SlideGage.css';

const SlideGage = ({ gage, onNextGage, onPreviousGage }) => {
  return (
    <div>
      {gage ? (
        <>
          <h2>{gage.text}</h2>
          <button onClick={onPreviousGage}>Gage précédent</button>
          <button onClick={onNextGage}>Gage suivant</button>
        </>
      ) : (
        <p>Aucun gage disponible</p>
      )}
    </div>
  );
};

export default SlideGage;