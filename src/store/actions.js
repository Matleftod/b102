// Action types
export const SET_PARTICIPANTS = 'SET_PARTICIPANTS';

// Action creators
export const setParticipants = (participants) => ({
  type: SET_PARTICIPANTS,
  payload: participants,
});
