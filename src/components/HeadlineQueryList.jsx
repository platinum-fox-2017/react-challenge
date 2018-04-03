import React from 'react'

class HeadlineQueryList extends React.Component {

  render () {
    // const { newsSource } = this.props
    return (
      <div>
        <h3>{ this.props.err }</h3>
          <ul>
            {
              this.props.newsLook.map((news, i) => (
                <li key={ i }>
                  <a href={ news.url }>{ news.title }</a>
                  <p>{ news.description }</p>
                </li>
              ))
            }
          </ul>
      </div>
    )
  }
}

export default HeadlineQueryList;
