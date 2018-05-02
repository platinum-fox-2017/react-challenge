import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  actNews, actNewsLoad, actNewsErr,
  actSearch, actSearchLoad, actSearchErr
} from './action.js'
import reducer from './reducer.js'

// STORE
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
