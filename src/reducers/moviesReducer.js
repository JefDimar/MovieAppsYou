export default function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case 'MOVIES/FETCHMOVIES':
      return { ...state, movies: payload }
    default:
      return state
  }
}