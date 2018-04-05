import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import newsReducer from './news/news.reducer'

const reducers = combineReducers({
  articles: newsReducer
})

const store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk))
export default store
