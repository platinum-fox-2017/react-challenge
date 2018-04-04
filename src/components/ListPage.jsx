import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './ListPage.css'
import logo from '../logo.svg'
import HeaderNav from './HeaderNav'
import { connect } from 'react-redux'

export default class ListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      universitiesList: [],
      showResult: false,
      showNotFound: false,
      isLoading: false
    }
  }

  componentDidMount () {
    this.handleGetData(this.props.match.params.name, this.props.match.params.country)
  }

  checkQuery = () => {
    this.setState({showResult: true})
    this.setState({isLoading: false})
    if(this.state.universitiesList.length === 0)
      this.setState({showNotFound: true})
    else
      this.setState({showNotFound: false})
  }

  handleGetData = (name, country) => {
    this.setState({isLoading: true})
    if(name === undefined && country !== undefined) {
      axios({
        method: 'get',
        url: `/search?country=${country}`
      })
        .then(response => {
          console.log(response.data)
          this.setState({universitiesList: response.data})
          this.checkQuery()
        })
        .catch(err => {
          this.setState({isLoading: false})
          console.log(`error: ${err}`)
        })
    } else if (country === undefined && name !== undefined) {
      axios({
        method: 'get',
        url: `/search?name=${name}`
      })
        .then(response => {
          console.log(response.data)
          this.setState({universitiesList: response.data})
          this.checkQuery()
        })
        .catch(err => {
          this.setState({isLoading: false})
          console.log(`error: ${err}`)
        })
    } else if(country !== undefined && name !== undefined) {
      axios({
        method: 'get',
        url: `/search?name=${name}&country=${country}`
      })
        .then(response => {
          console.log(response.data)
          this.setState({universitiesList: response.data})
          this.checkQuery()
        })
        .catch(err => {
          this.setState({isLoading: false})
          console.log(`error: ${err}`)
        })
    }

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
        {this.state.isLoading ? 
          <div>
            <img className='loading-logo' src={logo} alt=""/> 
            <h2 className='loading'>Loading<span>.</span><span>.</span><span>.</span></h2>
          </div>
        : null}
        {this.state.showResult ? 
            <Link to='/'className='btn btn-danger btn-rounded back-button'>
              Back
            </Link>
           : null}
        {this.state.showNotFound ? <h3>Search Not Found</h3> : null}
        {this.state.showResult ? 
          <div className='container'>
            {
              this.state.universitiesList.map((university,i) => {
                return (
                <div key={i} className='card-result'>
                  <Link to={{
                    pathname: '/detail/'+university.name.split(' ').join('-'),
                  }}>
                  <h3>{university.name}</h3>
                  <p>{university.country}</p>
                  </Link>
                </div>)
              })
            }
          </div>
        : null }
      </div>
    )
  }
}
