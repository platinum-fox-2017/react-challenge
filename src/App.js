import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import GifHome from './components/gifComponent.jsx/GifHome';
import GifDisplay from './components/gifComponent.jsx/GifDisplay';
import NewsHome from './components/newsComponent.jsx/NewsHome';
import NoContent from './components/NoContent';


class App extends Component {

  render() {
    return (
     <BrowserRouter> 
        <div className="App">
          {/* <header className="App-header"> */}
          {/* <Link to='/'>  <img src={logo} className="App-logo" alt="logo"/> </Link> */}
          {/* </header> */}
        <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/gif" component={ GifHome }/>
        <Route path="/gif/:id" component={ GifDisplay }/>
        <Route exact path="/news" component={ NewsHome }/>
        <Route exact path="/news/:category" component={ NewsHome }/>
        {/* <Route path="/:title" render={ (props) => <GifDisplay title={this.state.title} {...props} />}/> */}
        <Route exact component={ NoContent }/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;