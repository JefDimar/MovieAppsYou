const initialState = {
  movies: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'MOVIES/FETCHMOVIES':
      return { ...state, movies: payload }
    default:
      return state
  }
}

export default reducer