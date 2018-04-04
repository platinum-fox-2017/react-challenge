import React from 'react'
import {Link} from 'react-router-dom';

class SourceNavbar extends React.Component {
  render () {
    return (
      <nav className="tabs is-centered is-boxed">
        <ul>
          <li>
            <Link to="/ars-technica" onClick={ () => this.props.getNewsArs('ars-technica') }>
                <span>
                  Ars Technica
                </span>
            </Link>
          </li>
          <li>
            <Link to="/ign" onClick={ () => this.props.getNewsArs('ign') }>
                <span>
                  IGN
                </span>
            </Link>
          </li>
          <li>
            <Link to="/reddit-r-all" onClick={ () => this.props.getNewsArs('reddit-r-all') }>
                <span>
                  Reddit r/all
                </span>
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SourceNavbar;
