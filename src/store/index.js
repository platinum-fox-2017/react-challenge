import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux'

import thunk from 'redux-thunk'

// List Reducer
import HousesReducers from './houses/houses.reducers'

const reducers = combineReducers({
  houses: HousesReducers,
})

const store  = createStore(reducers,
  compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f  => f),
  applyMiddleware(thunk)
)

export default store