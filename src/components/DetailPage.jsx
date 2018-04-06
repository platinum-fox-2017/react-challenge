import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HeaderNav from './HeaderNav'
import logo from '../logo.svg'

import { fetchUniversityDetail, updatePrevLocation } from '../store/universties/universities.actions'

import './DetailPage.css'

class DetailPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.match.params.university.split('%20').join(' '),
    }    
  }

  fetchData = (name) => {
    this.props.fetchUniversityDetail(name)
  }

  componentDidMount () {
    this.fetchData(this.state.name)
    this.props.updatePrevLocation(this.props.location.pathname)
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
          {this.props.loading ? 
          <div>
            <img className='loading-logo' src={logo} alt=""/> 
            <h2 className='loading'>Loading<span>.</span><span>.</span><span>.</span></h2>
          </div>
        : null}
          {!this.props.loading ? 
            <div>
              <h1>{this.props.university.name}</h1>
              <div className='wrapper'>
                <h5>Name: {this.props.university.name}</h5>
                <h5>Country: {this.props.university.country}</h5>
                <h5>Website: <a href={this.props.university.website}> {this.props.university.website} </a></h5> 
              </div>
            </div>
          : null}
          <div><button onClick={this.props.history.goBack}>Back</button></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  university: state.detail.university,
  loading: state.detail.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUniversityDetail,
  updatePrevLocation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (DetailPage)