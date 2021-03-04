import { createStore, combineReducers } from 'redux'
import movieReducer from '../reducers/moviesReducer'
import favoriteReducer from '../reducers/favoritesReducer'

const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer
})

const store = createStore(rootReducer)

export default store