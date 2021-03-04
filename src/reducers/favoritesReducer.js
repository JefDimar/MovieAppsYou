import reducer from "./moviesReducer";

export default reducer(state, action) {
  const { type, payload } = action;

  switch(type) {
    case "FAVORITES/ADDFAVORITES":
      return { ...state, favorites: [ ...state.favorites, payload ] }
    default:
      return state
  }
}