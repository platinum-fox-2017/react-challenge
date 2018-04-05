import axios from 'axios'
import moment from 'moment'
import {
  LOAD_HOUSE_OK,
  LOAD_HOUSE_PENDING,
  LOAD_HOUSE_ERR
} from './house.actionTypes'

export const loadHouse = (payload) => {
  return dispatch => {
    dispatch(loadHouseLoading())
    axios.get('https://api.got.show/api/houses/byId/'+ payload)
    .then(response => {
      const data = {
        _id: response.data.data._id,
        name: response.data.data.name,
        updatedAt: moment(response.data.data.updatedAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
        createdAt: moment(response.data.data.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a"),
        ancestralWeapon: response.data.data.ancestralWeapon
      }
      dispatch(loadHouseOK(data))
    })
    .catch(err => {
      dispatch(loadHouseErr())
    })
  }
}

const loadHouseOK = (payload) => ({
  type: LOAD_HOUSE_OK,
  payload: payload,
})

const loadHouseLoading = () => ({
  type: LOAD_HOUSE_PENDING,
})

const loadHouseErr = () => ({
  type: LOAD_HOUSE_ERR,
})