import { 
  CLEAR_SEARCH,
  SEARCH_STORY, 
  ERROR, 
  CLEAR_STORIES,
  CLEAR_COMMENTS,
  FETCH_STORY, 
  FETCH_STORIES, 
  FETCH_COMMENTS, 
  LOADING, 
  LOADING_FINISH } from './actionTypes'

const fetchArticles = (articles) => {
  return dispatch => {
    
    dispatch(loading)
    dispatch(clearStory())
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
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

const fetchStory = (id) => {

  return dispatch => {
    dispatch(loading)
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
     .then(response => response.json())
     .then(result => {
       dispatch(setStory(result))
       dispatch(fetchComments(result))
     })
    .catch(e => {
      dispatch(loadingFinish)
      dispatch(error)
    })

  }
}

const fetchComments = (story) => {
  return dispatch => {
    dispatch(clearComment())
    story.kids.forEach(id => {
      dispatch(loading)
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
       .then(response => response.json())
       .then(result => {
         dispatch(setComments(result))
         dispatch(loadingFinish)
       })
       .catch(e => {
         dispatch(loadingFinish)
         dispatch(error)
       })
    })
  }
}

const searchStory = (query) => {
  return {
    type: SEARCH_STORY,
    query
  }
}

const clearStory = () => {
  return {
    type: CLEAR_STORIES,
  }
}

const clearComment = () => {
  return {
    type: CLEAR_COMMENTS,
  }
}

const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  }
}
const setStory = (story) => {
  return {
    type: FETCH_STORY,
    article: story
  }
}

const setArticles = (articles) => {
  return {
    type: FETCH_STORIES,
    articles
  }
}


const setComments = (comments) => {
 return {
    type: FETCH_COMMENTS,
    comments
  }
}
const loading  = { type: LOADING }
const loadingFinish  = { type: LOADING_FINISH }
const error  = { type: ERROR }

export {
  fetchArticles,
  fetchStory,
  searchStory,
  clearSearch
}
