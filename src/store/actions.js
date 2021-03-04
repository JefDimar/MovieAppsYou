// import useFetch from "../hooks/useFetch"
// import { useSelector } from "react-redux"

export function fetchMovies(payload) {
  return { type: 'MOVIES/FETCHMOVIES', payload}
}

export function addFavorites(payload) {
  const output = []
  output.push(payload)
  console.log(output)
  return { type: 'FAVORITES/ADDFAVORITES', payload }
}

// export function fetchingMovies() {
//   return (dispatch) => {
//     const data = useFetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=c2dcee8f08e877d5fb3559af163b7e36"
//     );
//     dispatch(fetchMovies(data))
//   }
// }