import { createStore, combineReducers, applyMiddleware } from 'redux';
import charactersReducers from './characters/characters.reducers'
import thunk from 'redux-thunk';

const reducers = combineReducers({
  charactersReducers: charactersReducers
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store;
