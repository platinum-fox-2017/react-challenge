import { GET_DATA, LOADING, ERROR } from './counter.actionTypes'

const initialState = {
    loading: false,
    error: false,
    data: 0
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
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