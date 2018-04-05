import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  actNews, actNewsLoad, actNewsErr,
  actSearch, actSearchLoad, actSearchErr
} from './action.js'
import reducer from './reducer.js'
import axios from 'axios'

// STORE
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

// THUNK MIDDLEWARE
export function getNewsArsRdx (source) {
  return (dispatch) => {
    dispatch(actNews([]))
    dispatch(actNewsLoad())
    if (!source) {
      source = 'ars-technica'
    }
    const url = 'https://newsapi.org/v2/top-headlines?'
      + `sources=${source}&`
      + 'apiKey=7680942fa076452ab0671b9ef5516074'
    axios.get(url).then(response => {
      dispatch(actNews(response.data.articles))
    }).catch(err => {
      dispatch(actNewsErr(err))
    })

  }
}

export function getNewsSearchRdx (query) {
  return (dispatch) => {
    dispatch(actSearch([]))
    dispatch(actSearchLoad())
    const url = 'https://newsapi.org/v2/everything?' +
      `q=${query}&` +
      'language=en&' +
      'sortBy=popularity&' +
      'apiKey=7680942fa076452ab0671b9ef5516074';
    axios.get(url).then(response => {
      dispatch(actSearch(response.data.articles))
    }).catch(err => {
      dispatch(actSearchErr(err))
    })

  }
}
