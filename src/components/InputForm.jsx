import React, { Component } from 'react'
import './InputForm.css'

export default class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      country: ''
    }
  }

  handleSubmit = () => {
    this.props.handleGetData(this.state.name, this.state.country)
    this.setState({name: ''})
    this.setState({country: ''})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h5>University Name: </h5>
          <input placeholder='Search by University Name' type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
          <h5>Country: </h5>
          <input placeholder='Search by Country' type="text" name="country" id="country" value={this.state.country} onChange={this.handleChange}/><br/>
          <button className='' onClick={this.handleSubmit}><strong>Search</strong></button>
        </div>
      </div>
    )
  }
}
