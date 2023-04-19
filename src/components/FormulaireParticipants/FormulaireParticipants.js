import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FormulaireParticipants.css';

const FormulaireParticipants = ({ participants, setParticipants, onFinishParticipants }) => {
  const [participantName, setParticipantName] = useState('');

  const handleChange = (event) => {
    setParticipantName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (participantName.trim()) {
      setParticipants([...participants, participantName.trim()]);
      setParticipantName('');
    }
  };

  return (
    <div className="FormulaireParticipants">
      <h2>Ajoutez les participants</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du participant"
          value={participantName}
          onChange={handleChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant}</li>
        ))}
      </ul>
      <button onClick={onFinishParticipants} className="finish-participants-button">
        Terminer
      </button>
    </div>
  );
};

FormulaireParticipants.propTypes = {
  participants: PropTypes.array.isRequired,
  setParticipants: PropTypes.func.isRequired,
  onFinishParticipants: PropTypes.func.isRequired,
};

export default FormulaireParticipants;