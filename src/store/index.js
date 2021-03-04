import { createStore, combineReducers, applyMiddleware } from 'redux'
import movieReducer from '../reducers/moviesReducer'
import favoriteReducer from '../reducers/favoritesReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store