import { GET_DATA, LOADING } from './counter.actionTypes';
import firebase from 'firebase';

export const getData = () => {
    return dispatch => {
        dispatch(loading());
        var counters = firebase.database().ref('counter');
        counters.on('value', function (snapshot) {
            dispatch(success(snapshot.val()));
        });
    }
}

export const increment = (payload) => {
    return dispatch => {
        firebase.database().ref('counter').set(payload + 1)
    }
}

export const decrement = (payload) => {
    return dispatch => {
        firebase.database().ref('counter').set(payload - 1)
    }
}

const success = (payload) => {
    return {
        type: GET_DATA,
        payload: payload
    }
}

const loading = () => {
    return {
        type: LOADING
    }
}

// const error = () => {
//     return {
//         type: ERROR
//     }
// }