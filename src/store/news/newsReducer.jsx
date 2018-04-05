import {
  GET_NEWS_DATA_LOADING,
  GET_NEWS_DATA_SUCCESS,
  GET_NEWS_DATA_ERROR
} from './newsActionTypes';

const initialState = {
  loading: false,
  error: false,
  dataNews: []
}

const newsReducers = (state=initialState, action) => {
  switch (action.type) {
    case GET_NEWS_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_NEWS_DATA_SUCCESS:
      return {
        ...state,
        dataNews: action.payload,
        loading: false
      };
    case GET_NEWS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default: 
      return state;
  }
}

export default newsReducers;