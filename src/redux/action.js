import { GETPHOTO_SUCCESS, GETPHOTO_LOADING, GETPHOTO_ERROR } from './actionType'
import axios from 'axios'

function getDataAction () {
    return dispatch => {
      dispatch(getPhotoLoading())
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=3441883492.ad56b48.5133663fa0024e4586e34a511c33638b')
        .then(result => dispatch(getPhotoSuccess(result.data.data)) )
        .catch(err => dispatch(getPhotoError()))
    }
}

const getPhotoSuccess = (payload) => ({
    type: GETPHOTO_SUCCESS,
    payload: payload
})
const getPhotoLoading = () => ({
    type: GETPHOTO_LOADING,
})
const getPhotoError = () => ({
    type: GETPHOTO_ERROR,
})


export default getDataAction