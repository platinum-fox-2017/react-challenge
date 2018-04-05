import { FETCH_YT_VIDEOS } from './ytActionTypes'
import axios from "axios";

const API = 'AIzaSyAqeflTMkQmxDmlCAUlEILEBEmGeoz3Mco'
const channelID = 'UC29ju8bIPH5as8OGnQzwJyA'
const result = 4

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAqeflTMkQmxDmlCAUlEILEBEmGeoz3Mco&channelId=UC29ju8bIPH5as8OGnQzwJyA&part=snippet,id&order=date&maxResults=2

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

export const fetchVideos = () => dispatch => {
  // console.log('@ytActions/ fetchVideos')
  axios.get(finalURL)
  .then(res => {
    const resultYT = res.data.items
    dispatch({
      type: FETCH_YT_VIDEOS,
      payload: resultYT
    })
  })
  .catch(error => {
    console.error(error)
  })
}

