import { combineReducers } from 'redux'
import users from './users'
import favouriteusers from './favouriteusers'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  users,
  favouriteusers,
  visibilityFilter
})
