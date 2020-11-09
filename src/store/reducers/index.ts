import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import collapsed from './collapsed'

export default combineReducers({ todos, visibilityFilter, collapsed })