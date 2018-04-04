import React, { Component } from 'react'
import axios from 'axios'
import HeaderNav from './HeaderNav'
import logo from '../logo.svg'

import './DetailPage.css'

export default class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.match.params.university.split('-').join(' '),
      country: '',
      website: '',
      isLoading: false,
    }    
  }

  fetchData = (name) => {
    this.setState({isLoading: true})
    axios({
      method: 'get',
      url: `/search?name=${name}`
    })
      .then(response => {
        this.setState({isLoading: false})
        console.log(response.data[0])
        this.setState({
          country: response.data[0].country,
          website: response.data[0].web_pages[0]
        })
      })
      .catch(err => {
        this.setState({isLoading: false})
        console.log(`err: ${err}`)
      })
  }

  componentDidMount () {
    console.log(this.state.name)
    this.fetchData(this.state.name)
  }


  setHeader = () => {
    if(this.state.isLoading){
      return 'header-logo-static'
    } else {
      return 'header-logo'
    }
  }

  render() {
    return (
      <div>
        <HeaderNav setHeader={this.setHeader} />
        <div className='container'>
          <h1>{this.state.name}</h1>
          {this.state.isLoading ? 
          <div>
            <img className='loading-logo' src={logo} alt=""/> 
            <h2 className='loading'>Loading<span>.</span><span>.</span><span>.</span></h2>
          </div>
        : null}
          {!this.state.isLoading ? 
            <div className='wrapper'>
              <h5>Name: {this.state.name}</h5>
              <h5>Country: {this.state.country}</h5>
              <h5>Website: <a href={this.state.website}> {this.state.website} </a></h5> 
            </div>
          : null}
          <div><button onClick={this.props.history.goBack}>Back</button></div>
        </div>
      </div>
    )
  }
}
