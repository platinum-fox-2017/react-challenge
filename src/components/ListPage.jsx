import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ListPage.css'
import logo from '../logo.svg'
import HeaderNav from './HeaderNav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUniversities, clearUniversitiesList, updatePrevLocation, clearPaginateList } from '../store/universties/universities.actions'

class ListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      universitiesListFiltered: [],
      showNotFound: false,
    }
  }

  componentDidMount () {
    this.props.updatePrevLocation(this.props.location.pathname)
    if (this.props.prevLocation.split('/')[1] !== 'detail') {
      this.props.clearUniversitiesList()
      this.props.clearPaginateList()
      this.handleGetData(this.props.match.params.name, this.props.match.params.country)
    // this.state.universitiesListFiltered = this.props.paginateList[this.props.match.params.page]
    }
  }

  handleGetData = (name, country) => {
    if(name === undefined && country !== undefined) {
      this.props.fetchUniversities(`/search?country=${country}`)
    } else if (country === undefined && name !== undefined) {
      this.props.fetchUniversities(`/search?name=${name}`)
    } else if(country !== undefined && name !== undefined) {
      this.props.fetchUniversities(`/search?name=${name}&country=${country}`)
    }

  }

  setHeader = () => {
    if(this.props.loading){
      return 'header-logo-static'
    } else {
      return 'header-logo'
    }
  }

  nextPage = () => {
    let name = this.props.match.params.name
    let country = this.props.match.params.country
    let nextPageNumber = Number(this.props.match.params.page)+1

    // console.log('leng', this.props.paginateList.length-1)
    // console.log('page', Number(this.props.match.params.page)+1)
    // console.log(Number(this.props.match.params.page)+1 > (this.props.paginateList.length - 1))

    if(name === undefined && country !== undefined) {
      this.props.history.push(`/search/country/${country}/page/${nextPageNumber}`)
    } else if (country === undefined && name !== undefined) {
      this.props.history.push(`/search/name/${name}/page/${nextPageNumber}`)
    } else if(country !== undefined && name !== undefined) {
      this.props.history.push(`/search/name/${name}/country/${country}/page/${nextPageNumber}`)
    }
  }

  prevPage = () => {
    let name = this.props.match.params.name
    let country = this.props.match.params.country
    let prevPageNumber = Number(this.props.match.params.page)-1

    if(name === undefined && country !== undefined) {
      this.props.history.push(`/search/country/${country}/page/${prevPageNumber}`)
    } else if (country === undefined && name !== undefined) {
      this.props.history.push(`/search/name/${name}/page/${prevPageNumber}`)
    } else if(country !== undefined && name !== undefined) {
      this.props.history.push(`/search/name/${name}/country/${country}/page/${prevPageNumber}`)
    }

  }

  render() {
    return (
      <div>
        <HeaderNav setHeader={this.setHeader} />
        {this.props.loading ? 
          <div>
            <img className='loading-logo' src={logo} alt=""/> 
            <h2 className='loading'>Loading<span>.</span><span>.</span><span>.</span></h2>
          </div>
        : null}

        <Link to='/'className='btn btn-danger btn-rounded back-button'>
          Back
        </Link>
        {this.props.universitiesList.length === 0 && this.props.loading === false ? <h3>Search Not Found</h3> : null}
        {this.props.paginateList[this.props.match.params.page-1]!== undefined ? 
        <div className='container'>
          {
            this.props.paginateList[this.props.match.params.page-1].map((university,i) => {
              return (
              <div key={i} className='card-result'>
                <Link to={{
                  pathname: '/detail/'+university.name.split(' ').join('%20'),
                }}>
                <h3>{university.name}</h3>
                <p>{university.country}</p>
                </Link>
              </div>)
            })
          }
           <button disabled={this.props.match.params.page - 2 < 0} onClick={this.prevPage}>Prev</button>  <button disabled={(Number(this.props.match.params.page)) > (this.props.paginateList.length - 1)} onClick={this.nextPage}>Next</button><br />
           <h6 id='page'>Page {this.props.match.params.page}/{this.props.paginateList.length}</h6>
        </div>
         : null}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('univ',state.list.paginateList[0])
  return ({
  universitiesList: state.list.universitiesList,
  loading: state.list.loading,
  prevLocation: state.location.prevLocation,
  paginateList: state.list.paginateList
})}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUniversities,
  clearUniversitiesList,
  updatePrevLocation,
  clearPaginateList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)
