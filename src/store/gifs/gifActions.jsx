import {
  GET_GIF_DATA_LOADING,
  GET_GIF_DATA_SUCCESS,
  GET_GIF_DATA_ERROR
} from './gifActionTypes';
import axios from 'axios';

export const getGifData = (payload) => {
  return dispatch => {
    dispatch(getGifDataLoading())
    axios.get("https://api.giphy.com/v1/gifs/trending?api_key=gJ0CGlHLOziXQdicVmhlBCZkEy7mhDAs&limit=20&rating=G")
    .then(({data}) => 
    dispatch(getGifDataSuccess(data.data)))
    .catch(err => dispatch(getGifDataError()));
  }
}

const getGifDataSuccess = (payload) => {
  return {
    type: GET_GIF_DATA_SUCCESS,
    payload
  }
}
const getGifDataLoading = () => ({
  type: GET_GIF_DATA_LOADING
}) 
const getGifDataError = () => ({
  type: GET_GIF_DATA_ERROR
})
