import {
  GET_NEWS_OK, GET_NEWS_LOAD, GET_NEWS_ERR,
  SEARCH_NEWS_OK, SEARCH_NEWS_LOAD, SEARCH_NEWS_ERR
} from './actionTypes.js'

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
