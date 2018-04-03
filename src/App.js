import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Newslist from './components/newslist'
import Detailnews from './components/DetailNews'
import Notfound from './components/Notfound'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/"><h1 className="App-title">News API</h1></Link>
        </header>
        <div>
            <Switch>
              <Route exact path='/' component={Newslist} />
              <Route path='/article/:id' component={Detailnews} />
              <Route component={Notfound}/>
            </Switch>
        </div>
      </div>
      </BrowserRouter>      
    );
  }
}

export default App;
