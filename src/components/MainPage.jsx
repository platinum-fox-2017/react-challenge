import React, { Component } from 'react'
import InputForm from './InputForm'
import HeaderNav from './HeaderNav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updatePrevLocation } from '../store/universties/universities.actions'

class MainPage extends Component {

  handleGetData = (name, country) => {
    if(name === '' && country !== '') {
      this.props.history.push(`/search/country/${country}/page/1`)
    } else if (country === '' && name !== '') {
      this.props.history.push(`/search/name/${name}/page/1`)
    } else if(country !== '' && name !== '') {
      this.props.history.push(`/search/name/${name}/country/${country}/page/1`)
    }
  }

  componentDidMount () {
    this.props.updatePrevLocation(this.props.location.pathname)
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

const mapStateToProps = (state) => ({
  name: state.name,
  country: state.country,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updatePrevLocation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (MainPage)