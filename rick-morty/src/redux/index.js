import { createStore, combineReducers } from 'redux';
import charactersReducers from './characters/characters.reducers'

const reducers = combineReducers({
  charactersReducers: charactersReducers
})

const store = createStore(reducers);

export default store;
