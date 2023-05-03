const initialState = {
    participants: [],
    gages: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PARTICIPANTS':
        return {
          ...state,
          participants: action.payload,
        };
      case 'SET_GAGES':
        return {
          ...state,
          gages: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;  