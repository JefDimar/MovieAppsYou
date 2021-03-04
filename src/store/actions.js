export function fetchMovies(payload) {
  return { type: 'MOVIES/FETCHMOVIES', payload}
}

export function addFavorites(payload) {
  return { type: 'FAVORITES/ADDFAVORITES', payload }
}