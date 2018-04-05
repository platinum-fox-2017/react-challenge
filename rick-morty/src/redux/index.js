import { createStore, combineReducers } from 'redux';
// import reducer from './reducer';
import charactersReducer from './characters/characters.reducers'

const reducers = combineReducers({
  charactersReducer: charactersReducer
})

const store = createStore(reducers);

export default store;
