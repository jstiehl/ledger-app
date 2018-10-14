import { combineReducers } from 'redux'
import userReducer from './userReducer'
import accountReducer from './accountReducer'

const rootReducer = combineReducers({
  userReducer,
  accountReducer
})
export default rootReducer