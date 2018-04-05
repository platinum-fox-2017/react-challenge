import { SET_HEROES_SUCCESS, SET_HEROES_ERROR, SET_HEROES_LOADING, SET_SELECTED_HERO } from './actionTypes';

const initialState = {
  loading: false,
  error: false,
  data: [],
  selectedData: {
    img: '',
    localized_name: '',
    primary_attr: '',
    attack_type: '',
    roles: [],
  },
}

export const heroes = (state = {...initialState}, action) => {
  switch (action.type) {
    case SET_HEROES_SUCCESS:
      return { ...state, data: action.value, loading: false };
    case SET_SELECTED_HERO:
    return { ...state, selectedData: action.value, loading: false };
    case SET_HEROES_ERROR:
      return { ...state, loading: false, error: true };
    case SET_HEROES_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}