import {
  GET_GIF_DATA_LOADING,
  GET_GIF_DATA_SUCCESS,
  GET_GIF_DATA_ERROR
} from './gifActionTypes';

const initialState = {
  loading: false,
  error: false,
  dataGif: []
}

const gifReducers = (state=initialState, action) => {
  switch (action.type) {
    case GET_GIF_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_GIF_DATA_SUCCESS:
      return {
        ...state,
        dataGif: action.payload,
        loading: false
      };
    case GET_GIF_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default: 
      return state;
  }
}

export default gifReducers;