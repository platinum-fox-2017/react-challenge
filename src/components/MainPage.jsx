import React, { Component } from 'react'
import InputForm from './InputForm'
import HeaderNav from './HeaderNav'

export default class MainPage extends Component {

  handleGetData = (name, country) => {
    if(name === '' && country !== '') {
      this.props.history.push(`/search/country/${country}`)
    } else if (country === '' && name !== '') {
      this.props.history.push(`/search/name/${name}`)
    } else if(country !== '' && name !== '') {
      this.props.history.push(`/search/name/${name}/country/${country}`)
    }
  }

  render() {
    return (
      <div>
        <HeaderNav />
        <InputForm handleGetData={this.handleGetData} />
      </div>
    )
  }
}
