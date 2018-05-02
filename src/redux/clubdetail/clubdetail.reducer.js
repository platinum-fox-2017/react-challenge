import {
  GET_DETAIL_CLUB,
  LOADING_DATA,
  ERROR_DATA
} from './clubdetail.actionTypes'


const initialState = {
  loading_data: false,
  error_data: false,
  detailClub: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_CLUB:
      return { 
        ...state,
        loading_data: false,
        error_data: false,
        detailClub: action.payload 
      };
    case LOADING_DATA:
      return {
        ...state,
        loading_data: true,
        error_data: false
      };
    case ERROR_DATA:
      return {
        ...state,
        error_data: true,
        loading_data: false
      };
    default:
      return state;
  }
}

export default reducer
