import { combineReducers } from 'redux'

const counterState = {
    count: 'Loading...' 
}

const newsState = {
    news: []
}

const counterReducers = (state = counterState, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return { ...state, count: action.payload}
        default:
            return state;
    }
}

const newsReducers = (state = newsState, action) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state, news: action.payload}
        default:
            return state;
    }
}

export default combineReducers({
    counterReducers,
    newsReducers
  })