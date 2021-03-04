const initialState = {
  favorites: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case "FAVORITES/ADDFAVORITES":
      return { ...state, favorites: [ ...state.favorites, payload ] }
    default:
      return state
  }
}

export default reducer