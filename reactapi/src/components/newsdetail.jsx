import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Detail extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  render() { 
    return ( 
      <div class="container">
        <div class="col-md-12">
          <img src={this.props.match.params.image} alt=""/>
          <h3>{this.props.match.params.title}</h3>
          <p>{this.props.match.params.description}</p>
        </div>
        <Link to="/news">
          <button class="btn btn-primary">Another News</button>
        </Link>
      </div>
     )
  }
}
 
export default Detail ;