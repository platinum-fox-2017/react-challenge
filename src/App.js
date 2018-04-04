import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css'

import Headline from './components/Headline';
import Search from './components/Search'
import Navbar from './components/Navbar'
import ErrorPage from './components/ErrorPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Headline} />
            <Route exact path="/:category" component={Headline} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
