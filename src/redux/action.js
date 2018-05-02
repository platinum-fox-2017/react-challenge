import {
  GET_NEWS_OK, GET_NEWS_LOAD, GET_NEWS_ERR,
  SEARCH_NEWS_OK, SEARCH_NEWS_LOAD, SEARCH_NEWS_ERR
} from './actionTypes.js'
import axios from 'axios'


// ACTIONS
export function actNews (news) {
  return {type: GET_NEWS_OK, payload: news}
}
export function actNewsLoad () {
  return {type: GET_NEWS_LOAD}
}
export function actNewsErr (err) {
  return {type: GET_NEWS_ERR, payload: err}
}

export function actSearch (newsSearch) {
  return {type: SEARCH_NEWS_OK, payload: newsSearch}
}
export function actSearchLoad () {
  return {type: SEARCH_NEWS_LOAD}
}
export function actSearchErr (err) {
  return {type: SEARCH_NEWS_ERR, payload: err}
}

// THUNK MIDDLEWARE
export function getNewsArsRdx (source) {
  return (dispatch) => {
    dispatch(actNews([]))
    dispatch(actNewsLoad())
    if (!source) {
      source = 'ars-technica'
    }
    const url = 'https://newsapi.org/v2/top-headlines?' +
      `sources=${source}&` +
      'apiKey=7680942fa076452ab0671b9ef5516074'
    axios.get(url).then(response => {
      dispatch(actNews(response.data.articles))
    }).catch(err => {
      dispatch(actNewsErr(err))
    })

  }
}

export function getNewsSearchRdx (query) {
  return (dispatch) => {
    dispatch(actSearch({
      articles: [],
      pages: 0
    }))
    dispatch(actSearchLoad())
    const url = 'https://newsapi.org/v2/everything?' +
      `q=${query}&` +
      `page=1&` +
      'language=en&' +
      'sortBy=popularity&' +
      'apiKey=7680942fa076452ab0671b9ef5516074';
    axios.get(url).then(response => {
      let pages = Math.floor(response.data.totalResults / 20)
      if (pages > 100) {
        pages = 100
      }
      const apiData = {
        articles: response.data.articles,
        pages: pages
      }
      dispatch(actSearch(apiData))
    }).catch(err => {
      dispatch(actSearchErr(err))
    })

  }
}
