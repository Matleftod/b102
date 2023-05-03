import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'; // Importez useDispatch et useSelector depuis react-redux
import { setParticipants } from '../../store/actions';
import './FormulaireParticipants.css';

const FormulaireParticipants = ({ onFinishParticipants }) => {
  const [participantName, setParticipantName] = useState('');
  const dispatch = useDispatch(); // Utilisez le hook useDispatch
  const participants = useSelector((state) => state.participants); // Utilisez le hook useSelector

  const handleChange = (event) => {
    setParticipantName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (participantName.trim()) {
      dispatch(setParticipants([...participants, participantName.trim()]));
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
  onFinishParticipants: PropTypes.func.isRequired,
};

export default FormulaireParticipants;