export function fetchMovies(payload) {
  return { type: 'MOVIES/FETCHMOVIES', payload}
}

export function addFavorites(payload) {
  const output = []
  output.push(payload)
  console.log(output)
  return { type: 'FAVORITES/ADDFAVORITES', payload }
}

export function fetchingMovies() {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}`)
      .then(response => response.json())
      .then(data => dispatch(fetchMovies(data.results)))
  }
}

export function searchMovies(query) {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${query}`)
      .then(response => response.json())
      .then(data => dispatch(fetchMovies(data.results)))
  }
}