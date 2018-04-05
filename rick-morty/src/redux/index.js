import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import charactersReducers from './characters/characters.reducers';
import characterDetail from './characterDetail/characterDetail.reducers'

const reducers = combineReducers({
  charactersReducers: charactersReducers,
  characterDetail: characterDetail
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store;
