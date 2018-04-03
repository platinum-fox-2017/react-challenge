import React, { Component } from 'react'
import InputForm from './InputForm'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './MainPage.css'


export default class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      universitiesList: [],
      showResult: false,
      showNotFound: false
    }
  }

  checkQuery = () => {
    console.log(this.state.universitiesList.length)
    this.setState({showResult: true})
    if(this.state.universitiesList.length === 0)
      this.setState({showNotFound: true})
    else
      this.setState({showNotFound: false})
  }

  handleGetData = (name, country) => {

    if(name === '' && country !== '') {
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
          console.log(`error: ${err}`)
        })
    } else if (country === '' && name !== '') {
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
          console.log(`error: ${err}`)
        })
    } else if(country !== '' && name !== '') {
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
          console.log(`error: ${err}`)
        })
    }

  }

  resetSearch = () => {
    this.setState({showResult: false})
  }

  render() {
    return (
      <div>
        {this.state.showResult ? null : <InputForm handleGetData={this.handleGetData} />}
        {this.state.showResult ? 
            <button onClick={this.resetSearch} className='btn btn-danger btn-rounded back-button'>
              Back
            </button>
           : null}
        {this.state.showNotFound ? <h3>Search Not Found</h3> : null}
        {this.state.showResult ? 
          <div>
            {
              this.state.universitiesList.map((university,i) => {
                return (
                <div key={i}>
                  <Link to={{
                    pathname: '/'+university.name.split(' ').join('-'),
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
