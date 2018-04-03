import React, { Component } from 'react'
import InputForm from './InputForm'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ListPage extends Component {
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

  render() {
    return (
      <div>
        <InputForm handleGetData={this.handleGetData} />
        {this.state.showResult ? <h2>Hasil : </h2> : null}
        {this.state.showNotFound ? <h3>Search Not Found</h3> : null}
        <ul>
          {
            this.state.universitiesList.map((university,i) => {
              return (
              <div key={i}>
                <Link to={{
                  pathname: '/'+university.name.split(' ').join('-'),
                }}>
                <h3>Name: {university.name}</h3>
                <p>Country: {university.country}</p>
                </Link>
              </div>)
            })
          }
        </ul>
      </div>
    )
  }
}
