import { 
  LOAD_ARTICLES_LOADING, 
  LOAD_ARTICLES_SUCCESS, 
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_DETAIL_LOADING,
  LOAD_ARTICLES_DETAIL_SUCCESS,
  LOAD_ARTICLES_DETAIL_ERROR
} from './articles.actionType';

const initialState = {
  loading: false,
  error: false,
  datas: [],
  data: {}
};

const reducers = (state = {...initialState}, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_ARTICLES_SUCCESS:
      console.log('action LOAD_ARTICLES_SUCCESS: ', action.payload.articles)
      return {
        ...state,
        datas: action.payload.articles,
        loading: false,
      }
    case LOAD_ARTICLES_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      }
      case LOAD_ARTICLES_DETAIL_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_ARTICLES_DETAIL_SUCCESS:
      console.log('action LOAD_ARTICLES_DETAIL_SUCCESS: ', action.payload.article)
      return {
        ...state,
        data: action.payload.article,
        loading: false,
      }
    case LOAD_ARTICLES_DETAIL_ERROR:
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