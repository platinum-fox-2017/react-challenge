import {
  LOAD_NEWS_LOADING,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_ERROR
} from './news.actionType'
import axios from 'axios'

export const searchnews = (payload) => {
  return dispatch => {
    dispatch(loadNewsLoading())
    axios.get(`https://newsapi.org/v2/everything?q=${payload}&apiKey=c007386430cc42208dfe32ba97c739eb`)
    .then(response => dispatch(loadNewsSuccess(response.data.articles)))
    .catch(err => dispatch(loadNewsError()))
  }
}

export const loadNews = (payload) => {
  return dispatch => {
    dispatch(loadNewsLoading())
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c007386430cc42208dfe32ba97c739eb')
    .then(response => dispatch(loadNewsSuccess(response.data.articles)))
    .catch(err => dispatch(loadNewsError()))
  }
}

export const loadNewsDetail = (category, title) => {
  return dispatch => {
    dispatch(loadNewsLoading())
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c007386430cc42208dfe32ba97c739eb`)
    .then(response => {
      console.log('loadNewsDetail: ', response.data.articles)
      // dispatch(loadNewsSuccess(response.data.articles))
    })
    .catch(err => dispatch(loadNewsError()))
  }
}

export const getNewsByCategory = (payload) => {
  return dispatch => {
    dispatch(loadNewsLoading())
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${payload}&apiKey=c007386430cc42208dfe32ba97c739eb`)
    .then(response => dispatch(loadNewsSuccess(response.data.articles)))
    .catch(err => dispatch(loadNewsError()))
  }
}

const loadNewsLoading = () => ({
  type: LOAD_NEWS_LOADING,
})

const loadNewsSuccess = (payload) => ({
  type: LOAD_NEWS_SUCCESS,
  payload: payload
})

const loadNewsError = () => ({
  type: LOAD_NEWS_ERROR
})