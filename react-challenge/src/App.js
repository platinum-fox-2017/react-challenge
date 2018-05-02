import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Youtube from './components/Youtube'
import YoutubeDetail from './components/YoutubeDetail'
import Category from './components/Category'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
          <Switch>
            <Route exact path="/" component={Youtube} />
            <Route path="/category" component={Category} />
            <Route path="/:id" component={YoutubeDetail} />
          </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
