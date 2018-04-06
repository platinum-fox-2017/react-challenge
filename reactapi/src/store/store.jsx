import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducerNews} from './news/news.reducer'
import {reducerCount} from './count/count.reducer'

const reducers = combineReducers({
  reducerNews,
  reducerCount
}) 

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)


export default store ;