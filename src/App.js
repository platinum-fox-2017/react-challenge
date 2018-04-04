import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getData } from './redux/actions';
import { connect } from 'react-redux';
import GifDisplay from './components/GifDisplay';
import Home from './components/Home';
import GifHome from './components/GifHome';
import NewsHome from './components/NewsHome';
import Navbar from './components/Navbar';


class App extends Component {

  render() {
    return (
     <BrowserRouter> 
        <div className="App">
          {/* <header className="App-header"> */}
          {/* <Link to='/'>  <img src={logo} className="App-logo" alt="logo"/> </Link> */}
          <Navbar/>
          {/* </header> */}
        <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/gif" component={ GifHome }/>
        <Route exact path="/news" component={ NewsHome }/>
        <Route path="/:id" component={ GifDisplay }/>
        {/* <Route path="/:title" render={ (props) => <GifDisplay title={this.state.title} {...props} />}/> */}
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gifData: state.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  getGifData: (payload) => dispatch(getData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);