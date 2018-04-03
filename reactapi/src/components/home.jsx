import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div>
        <h1>Hellow World !</h1>
        <p>Welcome to Hacker News </p>
        <Link to="/news">
          <button class="btn btn-success">read news</button> 
        </Link>
      </div>
    )
  }
}
 
export default Home ;