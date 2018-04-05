import axios from 'axios';
import { SET_HEROES_SUCCESS, SET_HEROES_ERROR, SET_HEROES_LOADING, SET_SELECTED_HERO } from './actionTypes';

export const setHeroes = (value) => {
  return dispatch => {
    dispatch(loading())
    axios.get('https://api.opendota.com/api/heroStats').then(res =>
      dispatch(success(res.data))
    ).catch(err => dispatch(error()))
  }
};

export const setSelectedHero = (value) => {
  return dispatch => {
    dispatch(loading())
    axios.get('https://api.opendota.com/api/heroStats').then(res =>
      {
        dispatch(success_select_hero(res.data.filter(hero => hero.id === Number(value))[0]))
      }
    ).catch(err => dispatch(error()))
  }
};

const loading = () => {
  return {
    type: SET_HEROES_LOADING,
  }
};

const success = (value) => {
  return {
    type: SET_HEROES_SUCCESS,
    value
  }
};

const success_select_hero = (value) => {
  return {
    type: SET_SELECTED_HERO,
    value
  }
};

const error = () => {
  return {
    type: SET_HEROES_ERROR,
  }
};
