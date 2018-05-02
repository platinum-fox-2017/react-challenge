import {
  GET_NEWS_DATA_LOADING,
  GET_NEWS_DATA_SUCCESS,
  GET_NEWS_DATA_ERROR
} from './newsActionTypes';
import axios from 'axios';

export const getNewsData = (payload) => {
  return dispatch => {
    dispatch(getNewsDataLoading())
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=42bee958ea824c018366af9a5e9d42c4")
    .then(({data}) => dispatch(getNewsDataSuccess(data.articles)))
    .catch(err => dispatch(getNewsDataError()));
  }
}

export const getNewsByCategory = (payload) => {
  return dispatch => {
    dispatch(getNewsDataLoading())
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${payload}&apiKey=42bee958ea824c018366af9a5e9d42c4`)
    .then(({data}) => {
      if (data.articles.length > 0) {
        dispatch(getNewsDataSuccess(data.articles))
      } else {
        dispatch(getNewsDataError())
      }
    })
    .catch(err=> dispatch(getNewsDataError()))
  }
}

export const getNewsBySearch = (payload) => {
  return dispatch => {
    dispatch(getNewsDataLoading())
    axios.get(`https://newsapi.org/v2/everything?q=${payload}&apiKey=42bee958ea824c018366af9a5e9d42c4`)
    .then(({data}) => 
    // console.log(data))
    dispatch(getNewsDataSuccess(data.articles)))
    .catch(err=> dispatch(getNewsDataError()))
  }
}

const getNewsDataSuccess = (payload) => ({
  type: GET_NEWS_DATA_SUCCESS,
  payload
}) 
const getNewsDataLoading = () => ({
  type: GET_NEWS_DATA_LOADING
}) 
const getNewsDataError = () => ({
  type: GET_NEWS_DATA_ERROR
}) 