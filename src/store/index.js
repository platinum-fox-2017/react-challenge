import { createStore, applyMiddleware } from 'redux'
import reducers from './universties/reducers/universities.index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(reducers, applyMiddleware(logger, thunk)) 

export default store