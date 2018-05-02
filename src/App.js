import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import DetailPage from './components/DetailPage'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import ListPage from './components/ListPage'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={MainPage} />
            {/* <Route exact path='/search/name/:name' component={ListPage} /> */}
            {/* <Route path='/search/name/:name/country/:country' component={ListPage} /> */}
            {/* <Route path='/search/country/:country' component={ListPage} /> */}
            <Route exact path='/search/name/:name/page/:page' component={ListPage} />
            <Route path='/search/name/:name/country/:country/page/:page' component={ListPage} />
            <Route path='/search/country/:country/page/:page' component={ListPage} />
            <Route path='/detail/:university' component={DetailPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
