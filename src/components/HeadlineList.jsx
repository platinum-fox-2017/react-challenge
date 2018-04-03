import React from 'react'
import 'bulma/css/bulma.css'

class HeadlineList extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          {
            this.props.newsSource.map((news, i) => (
              <div key={ i } className="box">
                <div className="content">
                  <a href={ news.url } >
                    <img src={ news.urlToImage } alt={ news.title } className="image" />
                  </a>
                  <a href={ news.url }>{ news.title }</a><br/>
                  <small>by { news.author } @ { news.source.name } </small>
                  <small>
                    { new Date(news.publishedAt).getDate() }-
                    { new Date(news.publishedAt).getMonth() }-
                    { new Date(news.publishedAt).getFullYear() }
                  </small>
                  <p>{ news.description }</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="column is-3"></div>
      </div>
    )
  }
}

export default HeadlineList;
