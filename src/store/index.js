import { createStore } from 'redux'

const initialState = {
  movies: [],
  favorites: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case 'MOVIES/FETCHMOVIES':
      return { ...state, movies: payload }
    case 'FAVORITES/ADDFAVORITES':
      return { ...state, favorites: [ ...state.favorites, payload ]}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store