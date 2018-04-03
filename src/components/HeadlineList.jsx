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
                  <a href={ news.url }>{ news.title }</a>
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
