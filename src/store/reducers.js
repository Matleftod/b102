const initialState = {
  participants: [], // Chaque participant est maintenant un objet avec un nom et un nombre de vies
  gages: [],
  categories: [],
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
    case 'ADD_CATEGORY':
      return { ...state, categories: [...state.categories, action.payload] };
    case 'REMOVE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((cat) => cat !== action.payload),
      };
    case 'UPDATE_PARTICIPANTS':
      return {
        ...state,
        participants: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;