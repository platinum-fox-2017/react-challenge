import React from 'react'
import '../helper.css'

class SearchForm extends React.Component {
  constructor () {
    super()
    this.state = {
      query: ''
    }
  }

  queryChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className="container m-t">
        <div className="columns is-mobile">
          <div className="column is-2"></div>
          <div className="field has-addons column is-8">
            <input className="input" type="text"
              name="query"
              placeholder="Search for news..."
              onChange={ this.queryChange }/>
            <div className="control">
              <button className="button" onClick={ () => this.props.searchNews( this.state.query ) }>Search</button>
            </div>
          </div>
          <div className="column is-2"></div>
        </div>
      </div>

    )
  }
}

export default SearchForm;
