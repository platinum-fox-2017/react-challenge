import React from 'react'
import 'bulma/css/bulma.css'

class HeadlineQueryList extends React.Component {
  render () {
    return (
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <h3>{ this.props.err }</h3>
          {
            this.props.newsLook.map((news, i) => (
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

export default HeadlineQueryList;
