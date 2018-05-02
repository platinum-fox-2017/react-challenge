import React, { Component } from 'react';

export default class NewsSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      news: ''
    }
  }

  inputHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    const formStye = {
      display: 'flex'
    }

    return (
        <div className="search-content">
          <div className="form-group search-box" style={ formStye }>
            <input className="form-control col-lg-10 my-4" type="text" name="news" placeholder="I'm looking for some news" aria-label="Search" onChange={ this.inputHandle }/>
            <button className="btn btn-outline-info col-lg-2 mx-2 my-4" type="button" onClick={ () => this.props.getNewsSearch(this.state.news) }>Search</button>
          </div>
        </div>
    )
  }
};
