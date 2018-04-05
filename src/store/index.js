import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import articleReducers from './articles/articles.reducers';

const reducers = combineReducers({
  articles: articleReducers,
});

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;