import { createStore, combineReducers, applyMiddleware } from 'redux'
import newsReducers from './news/news.reducers'
import counterReducers from './counter/counter.reducers'
import thunk from 'redux-thunk'

const reducers = combineReducers ({
    news: newsReducers,
    counter: counterReducers
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;