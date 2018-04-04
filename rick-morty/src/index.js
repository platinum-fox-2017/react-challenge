import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'

const reducer = (state = {
  characters: [],
  activeCharacter: {},
  isLoading: true
}, action) => {
  switch(action.type) {
    case 'FETCHCHARACTERS': {
      console.log('Reducer ===> action:', action)
      const newState = { 
        ...state,
        characters: [ ...state.characters, ...action.payload ]
      }
      return newState
    }
    default: {
      return state
    }
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store= { store }>
  <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
