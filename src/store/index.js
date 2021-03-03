import { createStore } from 'redux'

const initialState = {
  movies: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case 'MOVIES/FETCHMOVIES':
      return { ...state, movies: payload }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store