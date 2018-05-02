import {
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR,
  LOAD_PLAYERS_LOADING
} from './players.actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducers = (state={ ...initialState }, action) => {
  switch (action.type) {
    case LOAD_PLAYERS_SUCCESS:
      console.log('PAYLOAD ', action.payload)
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case LOAD_PLAYERS_LOADING:
      return {
        ...state,
        loading: true,
        data: []
      }
    case LOAD_PLAYERS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state;
  }
}

export default reducers;
