import { LOAD_ARTICLES_LOADING, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR } from './articles.actionType';
import axios from 'axios';

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

export const loadArticles = (payload) => {
  console.log('load articles')
  return dispatch => {
    dispatch(loadArticlesLoading())
    axios.get('http://seorangeksa.com:3003/api/articles')
    .then(({data}) => dispatch(loadArticlesSuccess(data)))
    .catch(err => dispatch(loadArticlesError()))
  }
};