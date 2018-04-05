import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getNewsData, getNewsByCategory, getNewsBySearch } from '../../store/news/newsActions' ;
import { connect } from 'react-redux';
import Navbar from './NewsNavbar';
import Search from './NewsSearch';
import loadingGif from '../../loading.gif'
import image from '../../no-image.png'
// import NoContent from '../NoContent';

class Home extends Component {

  getNewsCategory = (value) => {
    this.props.getNewsByCategory(value)
  }

  getNewsSearch = (value) => {
    this.props.getNewsBySearch(value)
  }
  
  componentDidMount () {
    this.props.getNewsData()
  }

  render () {
    const { newsData, loading, error } = this.props
    const newsStyle = {
      background: 'gainsboro',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      marginRight: 30,
      marginLeft: 30
    }
    const titleStyle = {
      marginRight: 30,
      marginLeft: 30,
      textAlign: 'left'
    }
    const descriptionStyle = {
      marginTop: 20,
      marginRight: 30,
      marginLeft: 30,
      textAlign: 'justify'
    }
    if ( loading ) {
      return (
        <div className="container">
          <img src={ loadingGif } alt=""/>
          <p>Load your Page ... </p>
        </div>
      )
    } else if ( newsData.length === 0 ) {
      return <h1> No news... </h1>
    } else if ( error ) {
      return <h1>Failed to Fetch Your Data .....</h1>
    } else {
      return (
      <div>
        <Navbar getNewsCategory = { this.getNewsCategory } />
          <div className="container py-4">
          <h1>TODAY'S HOT NEWS</h1>
            <Search getNewsSearch = { this.getNewsSearch } />
            { loading ?
              <div className="container">
                <img src={ loadingGif } alt=""/>
                <p>Load your Page ... </p>
              </div>
              : 
              <div className="row">
                <div className="col">
                  { 
                    newsData.map((news, index) =>
                    <div className="media my-4" key={ index } style={ newsStyle }>
                    { news.urlToImage ?
                      <img className="align-self-start mr-3" src={ news.urlToImage } width="250px" alt=""/>
                      :
                      <img className="align-self-start mr-3" src={ image } width="250px" alt=""/>
                    }
                      <div className="media-body">
                        <h5 className="mt-0 newsTitle" style={ titleStyle }>{ news.title }</h5>
                        { news.description ? 
                        <p className="newsDescription" style={ descriptionStyle }> { news.description } <br/> <a href={ news.url }> read more... </a> </p>
                        :
                        <p className="newsDescription" style={ descriptionStyle }> No Detail Information <br/> <a href={ news.url }> read more... </a> </p>
                        }
                      </div>
                    </div>
                    )
                  }
                </div>
              </div>
            }
          </div>
      </div>
      )
    }
  }

}
const mapStateToProps = (state) => {
  return {
    newsData: state.news.dataNews,
    loading: state.news.loading,
    error: state.news.error
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNewsData, getNewsByCategory, getNewsBySearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);


