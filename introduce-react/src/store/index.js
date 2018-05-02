import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk';

import teamReducers from './teams/teams.reducers'
import playerReducers from './players/players.reducers'

const reducers = combineReducers({
  team: teamReducers,
  player: playerReducers
})

const store = createStore(
  reducers,/* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store;
