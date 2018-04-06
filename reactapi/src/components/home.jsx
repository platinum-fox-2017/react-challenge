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
            <button style= {styles.button} class="btn btn-success">read news</button> 
          </Link>
          <Link to="/count">
            <button style= {styles.button} class="btn btn-success">Count Number</button>
          </Link>
          <Link to="/newsRedux">
            <button class="btn btn-success">News With Redux</button>
          </Link>
      </div>
    )
  }
}

const styles = {
  button :{
    marginRight: '10px'
  }
}

export default Home ;