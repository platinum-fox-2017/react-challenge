import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class SearchForm extends Component {
  constructor () {
    super()
    this.state = {
      query: ''
    }
  }
  
  handlehange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <div className="container newsItem">
        <div className="row">
        <div className="col-md-1">
        <div className="dropdown">
          <button className="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Category
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/General"><button className="dropdown-item" onClick={()=>this.props.getCategory('General')}>General</button></Link>
            <Link to="/Business"><button className="dropdown-item" onClick={()=>this.props.getCategory('Business')} >Business</button></Link>
            <Link to="/Entertainment"><button className="dropdown-item" onClick={()=>this.props.getCategory('Entertainment')}>Entertainment</button></Link>
            <Link to="/Health"><button className="dropdown-item" onClick={()=>this.props.getCategory('Health')}>Health</button></Link>
            <Link to="/Science"><button className="dropdown-item" onClick={()=>this.props.getCategory('Science')}>Science</button></Link>
            <Link to="/Technology"><button className="dropdown-item" onClick={()=>this.props.getCategory('Technology')}>Technology</button></Link>
          </div>
        </div>
        </div>
          <div className="col-md-10 offset-1">
              <form>
                  <div className="input-group">
                      <input className="form-control" type="text" name='query' onChange={this.handlehange} placeholder="Search"/>
                      <span className="input-group-btn">
                      <Link to="/search"><button type='button' className="btn btn-success" onClick={()=>this.props.search(this.state.query)} >Search</button></Link>
                      </span>
                  </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
};
