import React from 'react'
import PropTypes from 'prop-types'

class Pagination extends React.Component {
  render () {
    return (

      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <nav className="pagination is-centered" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
              <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a className="pagination-link" aria-label="Goto page 45">end</a></li>
            </ul>
          </nav>
        </div>
        <div className="column is-3"></div>
      </div>
    )
  }
}

export default Pagination;
