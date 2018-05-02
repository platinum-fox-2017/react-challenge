import { 
  FETCH_UNIVERSITIES_SUCCESS, 
  FETCH_UNIVERSITIES_ERROR, 
  FETCH_UNIVERSITIES_LOADING,
  FETCH_UNIVERSITY_DETAIL_SUCCESS,
  FETCH_UNIVERSITY_DETAIL_ERROR,
  FETCH_UNIVERSITY_DETAIL_LOADING,
  CLEAR_UNIVERSITIES_LIST,
  UPDATE_PREVIOUS_LOCATION,
  UPDATE_PAGINATE_LIST,
  CLEAR_PAGINATE_LIST
} from './universities.actionTypes'

import axios from 'axios'

export const fetchUniversities = (payload) => {
  return dispatch => {
    // dispatch(clearUniversitiesList())
    dispatch(fetchUniversitiesLoading())
    axios({
      method: 'get',
      url: payload
    })
      .then(({data}) => {
        console.log(data)
        dispatch(paginateList(data))
        dispatch(fetchUniversitiesSuccess(data))
      })
      .catch(err => {
        console.log(`error: ${err}`)
        dispatch(fetchUniversitiesError())
      })
  }
}

const paginateList = (payload) => {
  return dispatch => {
    let tempArr = []
    let dataArr = []
    payload.forEach((val, i) => {
      if((i+1) % 10 === 0 || i === payload.length-1) {
        dataArr.push(val)
        tempArr.push(dataArr.concat())
        dataArr = []
      } else {
        dataArr.push(val) 
      }
    })
    dispatch(updatePaginateList(tempArr))
  }
}

const updatePaginateList = (payload) => ({
  type: UPDATE_PAGINATE_LIST,
  payload
})

export const fetchUniversityDetail = (payload) => {
  return dispatch => {
    dispatch(fetchUniversityDetailLoading())
    axios({
      method: 'get',
      url: `/search?name=${payload}`
    })
      .then(({data}) => {
        console.log(data[0])
        let tempObj = {
          name: data[0].name,
          country: data[0].country,
          website: data[0].web_pages[0] 
        }
        dispatch(fetchUniversityDetailSuccess(tempObj))
      })
      .catch(err => {
        dispatch(fetchUniversityDetailError())
        console.log(`err: ${err}`)
      })
  }
}

export const clearUniversitiesList = () => ({
  type: CLEAR_UNIVERSITIES_LIST
})

export const clearPaginateList = () => ({
  type: CLEAR_PAGINATE_LIST
})

const fetchUniversityDetailSuccess = (university) => ({
  type: FETCH_UNIVERSITY_DETAIL_SUCCESS,
  payload: university
})

const fetchUniversityDetailLoading = () => ({
  type: FETCH_UNIVERSITY_DETAIL_LOADING,
})

const fetchUniversityDetailError = () => ({
  type: FETCH_UNIVERSITY_DETAIL_ERROR,
})

const fetchUniversitiesSuccess = (universities) => ({
  type: FETCH_UNIVERSITIES_SUCCESS,
  payload: universities
})

const fetchUniversitiesLoading = () => ({
  type: FETCH_UNIVERSITIES_LOADING,
})


const fetchUniversitiesError = () => ({
  type: FETCH_UNIVERSITIES_ERROR,
})

export const updatePrevLocation = (payload) => ({
  type: UPDATE_PREVIOUS_LOCATION,
  payload
})

