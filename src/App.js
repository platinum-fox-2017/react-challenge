import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css'

import Headline from './components/Headline';
import Search from './components/Search'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Headline} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
