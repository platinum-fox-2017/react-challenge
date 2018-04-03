import React from 'react'
import 'bulma/css/bulma.css'

class ErrorPage extends React.Component {
  render () {
    return (
      <div className="hero is-medium is-bold is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">404 Page Not Found</h1>
            <h2 className="subtitle">Are you Lost?</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorPage;
