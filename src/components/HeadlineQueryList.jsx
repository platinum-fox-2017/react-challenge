import React from 'react'
import 'bulma/css/bulma.css'
import '../helper.css'
import { connect } from 'react-redux'

class HeadlineQueryList extends React.Component {
  render () {
    if (this.props.err) {
        return (
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <div className="content">
                <h1>{ this.props.err }</h1>
                <h2>Data retreiving failed.</h2>
              </div>
            </div>
            <div className="column is-3"></div>
          </div>
        )
    } else {
      return (
        <div>
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              {
                this.props.newsSearch.map((news, i) => (
                  <div key={ i } className="box">
                    <div className="content">
                      <a href={ news.url }>
                        <div className="parent">
                          <img src={ news.urlToImage } alt={ news.title } className="image child" />
                        </div>
                      </a>
                      <a href={ news.url }className="has-text-left"><h4 className="xshort">{ news.title }</h4></a>
                      <div className="has-text-justified xshort">
                        <p>{ news.description }</p>
                        <small className="is-uppercase">by { news.author }</small>
                        <small > @ { news.source.name } </small>
                        <small>
                          { new Date(news.publishedAt).getDate() }/
                          { new Date(news.publishedAt).getMonth()+1 }/
                          { new Date(news.publishedAt).getFullYear() }
                        </small>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="column is-3"></div>
          </div>
        </div>
      )
    }
  }
}

const stateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    err: state.err,
    newsArs: state.newsArs,
    newsSearch: state.newsSearch,
    pages: state.pages
  }
}

export default connect(stateToProps, null)(HeadlineQueryList);
