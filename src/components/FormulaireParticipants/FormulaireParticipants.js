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
      // Ici, nous créons un nouvel objet pour le participant, avec le nom entré et 3 vies par défaut
      const newParticipant = { name: participantName.trim(), lives: 2 };
      // Ensuite, nous ajoutons ce nouvel objet participant à notre liste de participants
      dispatch(setParticipants([...participants, newParticipant]));
      setParticipantName('');
    }
  };

  return (
    <div className="FormulaireParticipants">
      <h2>Ajoutez les participants</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-div'>
          <input
            type="text"
            className="input-participant"
            placeholder="Nom du participant"
            value={participantName}
            onChange={handleChange}
          />
          <span className="front input-3d">
            
          </span>
        </div>
        <button className="pushable ajouter-btn" type="submit">
          <span className="front ajouter">
            Ajouter
          </span>
        </button>
      </form>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>{participant.name} </li>
        ))}
      </ul>
      <button className="pushable terminer-btn" onClick={onFinishParticipants}>
        <span className="front terminer">
          Terminer
        </span>
      </button>
    </div>
  );
};

FormulaireParticipants.propTypes = {
  onFinishParticipants: PropTypes.func.isRequired,
};

export default FormulaireParticipants;