import { ERROR, FETCH_STORIES, FETCH_COMMENTS, LOADING, LOADING_FINISH } from './actionTypes'

const fetchArticles = (articles) => {
  return dispatch => {
    
    dispatch(loading)
    fetch('https://hacker-new.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => response.json())
      .then(result => {
        dispatch(fetchDetailArticles(result.slice(0, 9)))
      })
      .catch(e => {
        dispatch(loadingFinish)
        dispatch(error)
      })
  } 
}

const fetchDetailArticles = (articlesID) => {
  
  return dispatch => {
    articlesID.forEach(id => {
      dispatch(loading)
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
         .then(response => response.json())
         .then(result => {
           dispatch(setArticles(result))
           dispatch(loadingFinish)
         })
        .catch(e => {
          dispatch(loadingFinish)
          dispatch(error)
        })
    })
  }
}

const setArticles = (articles) => {
  return {
    type: FETCH_STORIES,
    articles
  }
}

const loading  = { type: LOADING }
const loadingFinish  = { type: LOADING_FINISH }
const error  = { type: ERROR }

const fetchComments = (comments) => {
 return {
    type: FETCH_COMMENTS,
    comments
  }
}
export {
  fetchArticles,
  fetchComments
}
