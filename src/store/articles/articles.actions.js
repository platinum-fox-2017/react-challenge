import axios from 'axios';
import { 
  LOAD_ARTICLES_LOADING, 
  LOAD_ARTICLES_SUCCESS, 
  LOAD_ARTICLES_ERROR,
  LOAD_ARTICLES_DETAIL_LOADING,
  LOAD_ARTICLES_DETAIL_SUCCESS,
  LOAD_ARTICLES_DETAIL_ERROR
} from './articles.actionType';

const loadArticlesLoading = (payload) => ({
  type: LOAD_ARTICLES_LOADING,
});

const loadArticlesSuccess = (payload) => ({
  type: LOAD_ARTICLES_SUCCESS,
  payload: payload,
});

const loadArticlesError = (payload) => ({
  type: LOAD_ARTICLES_ERROR,
});

const loadArticleDetailLoading = (payload) => ({
  type: LOAD_ARTICLES_DETAIL_LOADING,
});

const loadArticleDetailSuccess = (payload) => ({
  type: LOAD_ARTICLES_DETAIL_SUCCESS,
  payload: payload,
});

const loadArticleDetailError = (payload) => ({
  type: LOAD_ARTICLES_DETAIL_ERROR,
});

export const loadArticles = (payload) => {
  return dispatch => {
    dispatch(loadArticlesLoading())
    axios.get('http://seorangeksa.com:3003/api/articles')
    .then(({data}) => {
      console.log('data loadArticles', data)
      dispatch(loadArticlesSuccess(data))
    })
    .catch(err => dispatch(loadArticlesError()))
  }
};

export const loadArticleById = (id) => {
  // console.log('loadArticleById: ', id)
  return dispatch => {
    dispatch(loadArticleDetailLoading())
    axios.get(`http://seorangeksa.com:3003/api/articles/${id}`)
    .then(({data}) => {
      // console.log('data loadArticleById', data)
      dispatch(loadArticleDetailSuccess(data))
    })
    .catch(err => dispatch(loadArticleDetailError()))
  }
}