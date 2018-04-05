import { LOAD_ARTICLES_LOADING, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR } from './articles.actionType';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const reducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        data: action.payload.articles,
        loading: false,
      }
    case LOAD_ARTICLES_ERROR:
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