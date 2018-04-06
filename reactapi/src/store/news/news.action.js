import axios from 'axios'
import {FETCH_DATA} from './news.actiontype'

export const fetchData = () => {
  return dispatch => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f2f62204c96048bd87788897a3d41317')
    .then(data => {
      dispatch(success(data.data.articles))
    })
    .catch(err => {console.log(err)}) 
  }
}

export const fetchCategory = payload => {
  return dispatch => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${payload}&apiKey=f2f62204c96048bd87788897a3d41317`)
    .then(data => {
      dispatch(success(data.data.articles))
    })
    .catch(err => {console.log(err)}) 
  }
}


const success = (payload) => {
  return{
    type: FETCH_DATA,
    payload: payload
  }
}