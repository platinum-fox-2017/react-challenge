import { combineReducers } from 'redux'
import ytReducer from './ytReducer'

export default combineReducers({
  resultYT: ytReducer
})
