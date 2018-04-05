import { GET_NEWS, LOADING, ERROR } from './news.actionTypes';
import axios from 'axios';

export const getNews = () => {
    return dispatch => {
        dispatch(loading());
        axios.get('https://newsapi.org/v2/everything?sources=espn&apiKey=2e9aaee5201948d48f187726b0896988')
            .then(response => {
                dispatch(success(response.data.articles))
            }).catch(err => {
                dispatch(error())
            })
    }
}

export const getNewsById = (payload) => {
    return dispatch => {
        dispatch(loading());
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${payload}&apiKey=2e9aaee5201948d48f187726b0896988`)
            .then(response => {
                dispatch(success(response.data.articles))
            }).catch(err => {
                dispatch(error())
            })
    }
}

const success = (payload) => {
    return {
        type: GET_NEWS,
        payload: payload
    }
}

const loading = () => {
    return {
        type: LOADING
    }
}

const error = () => {
    return {
        type: ERROR
    }
}