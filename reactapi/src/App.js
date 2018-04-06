import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import News from './components/news';
import Home from './components/home'
import Detail from './components/newsdetail'
import Lost from './components/lost'
import Count from './components/letscount'
import './App.css';
import newsRedux from './components/newsRedux';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React News</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/count" component={Count}/>
            <Route path="/detailnews/:title/:description/:image" component={Detail}/>
            <Route path="/newsRedux" component={newsRedux}/>
            <Route path="/newsRedux/:category" component={newsRedux}/>
            <Route component={Lost}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
