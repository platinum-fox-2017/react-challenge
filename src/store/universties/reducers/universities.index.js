import { combineReducers } from 'redux'
import universitiesReducers from './universities.list.reducers'
import universityDetailReducers from './universities.detail.reducers'
import universityLocation from './universitites.location.reducers'
const reducers = combineReducers({
  list: universitiesReducers,
  detail: universityDetailReducers,
  location: universityLocation
})

export default reducers