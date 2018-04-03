import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import NewComponent from './components/NewComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={ News } />
              <Route path="/test" component={ NewComponent } />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
