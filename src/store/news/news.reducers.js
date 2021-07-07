import { GET_NEWS, LOADING, ERROR } from './news.actionTypes'

const initialState = {
    loading: false,
    error: false,
    data: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return { 
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducers;