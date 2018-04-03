import React, { Component } from 'react'
import axios from 'axios'

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
    axios({
      method: 'get',
      url: `/search?name=${name}`
    })
      .then(response => {
        console.log(response.data[0])
        this.setState({isLoading: true})
        this.setState({
          country: response.data[0].country,
          website: response.data[0].web_pages[0]
        })
      })
      .catch(err => {
        console.log(`err: ${err}`)
      })
  }
  componentWillMount () {
    console.log(this.state.name)
    this.fetchData(this.state.name)
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        {this.state.isLoading ? 
          <div>
            <h3>Name: {this.state.name}</h3>
            <h3>Country: {this.state.country}</h3>
            <h3>Website: {this.state.website}</h3> 
          </div>
        : null}
      </div>
    )
  }
}
