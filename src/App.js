import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Heading from './components/header'
import Feed from './components/feed'
import Display from './components/display'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      feeds: []
    }
  }
  addFeed = (newFeed) => {
    // console.log(newFeed)
    this.setState(prevState => ({
      feeds: [...prevState.feeds, ...newFeed]
    })) 
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Heading />
          <Switch>
            <Route exact path='/images/:id' component= {Display}/>
            <Route path='/' render={ (props) => <Feed feeds={ this.state.feeds } {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  componentDidMount(){
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=3441883492.ad56b48.5133663fa0024e4586e34a511c33638b')
      .then(result => {
        // console.log(result.data.data)
        this.addFeed(result.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default App;
