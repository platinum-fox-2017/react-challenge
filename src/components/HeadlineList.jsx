import React from 'react'

class HeadlineList extends React.Component {
  render () {
    // const { newsSource } = this.props
    return (
      <ul>
        {
          this.props.newsSource.map((news, i) => (
            <li key={ i }>
              <a href={ news.url }>{ news.title }</a>
              <p>{ news.description }</p>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default HeadlineList;
