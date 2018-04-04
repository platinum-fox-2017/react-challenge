import React, { Component } from 'react';
import axios from 'axios';
import { getNewsData } from '../redux/actions';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount () {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=42bee958ea824c018366af9a5e9d42c4").then(({data}) => {
      this.props.getNews(data.articles)
      // console.log(data.articles,'Newssss')
      console.log(this.props.newsData,'Newssss')
    })
  }

  render () {
    const { newsData } = this.props
    const newsStyle = {
      background: 'gainsboro'
    }
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-sm-8">
            { newsData.length > 0 ?
              newsData.map((news, index) =>
              <div className="media my-4" key={ index } style={ newsStyle }>
                <img className="align-self-start mr-3" src={ news.urlToImage } width="250px" alt=""/>
                <div className="media-body">
                  <h5 className="mt-0">{ news.title }</h5>
                  { news.description ? <p> { news.description } </p> : <p> No Detail Information </p>
                  }
                </div>
              </div>
              )
              : <h1>Loading ....</h1>
            }
          </div>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    newsData: state.dataNews
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNews: (payload) => dispatch(getNewsData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


