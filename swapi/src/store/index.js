import { createStore, applyMiddleware, combineReducers } from 'redux';
import { cardsReducer, cardReducer } from './cards/cards.reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  cardsReducer,
  cardReducer
})

const store = createStore(
  reducers,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store;