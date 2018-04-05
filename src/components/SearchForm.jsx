import React, { Component } from 'react';

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
      <div className="container">
        <form className="form-inline text-center">
          <input className="form-control mr-sm-2" type="text" name='query' onChange={this.handlehange} placeholder="Search"/>
          <button className="btn btn-success" onClick={this.props.searchNews(this.state.query)} >Search</button>
        </form>
      </div>
    )
  }
};
