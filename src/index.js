import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const config = {
    apiKey: "AIzaSyBZiCBVqYFjpobhIl6Np1KOdA14HmGBnr4",
    authDomain: "reza-pramudhika.firebaseapp.com",
    databaseURL: "https://reza-pramudhika.firebaseio.com",
    projectId: "reza-pramudhika",
    storageBucket: "reza-pramudhika.appspot.com",
    messagingSenderId: "842136926824"
};
firebase.initializeApp(config);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
