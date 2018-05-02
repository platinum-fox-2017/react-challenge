import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk'
import gifReducers from './gifs/gifReducer';
import newsReducers from './news/newsReducer';

const reducers = combineReducers({
  gifs: gifReducers,
  news: newsReducers
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;