import {FETCH_DATA} from './news.actiontype'

const initialState = {
  news : []
}

const reducerNews = (state = initialState,action) => {
  switch(action.type){
    case FETCH_DATA:{
      return {
        ...state, news: action.payload
      }
    }
    default :{
      return state
    }
  }
}

export {
  reducerNews
}
