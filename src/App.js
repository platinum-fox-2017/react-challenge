import React, { Component } from 'react';
import Home from './components/Home';
import logo from './logo.svg';
import Axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import GifDisplay from './components/GifDisplay';


class App extends Component {

  constructor () {
    super()
    this.state = {
      title: 'Trending #10 gif in the USA',
      gifData: []
    }
  }

  componentDidMount () {
    let self = this
    Axios({
      method: 'get',
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=gJ0CGlHLOziXQdicVmhlBCZkEy7mhDAs&limit=10&rating=R'
      })
        .then(({data}) => {
          self.setState({ gifData: data.data })
        })
  }


  render() {
    return (
     <BrowserRouter> 
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title" title={ this.state.title }>
            <Link to='/'> { this.state.title } </Link>
            </h1>
          </header>
        <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/:id" component={ GifDisplay }/>
        {/* <Route path="/:title" render={ (props) => <GifDisplay title={this.state.title} {...props} />}/> */}
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;