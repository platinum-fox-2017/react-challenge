import React from 'react'

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
      <div>
        <input type="text"
          name="query"
          placeholder="..."
          onChange={ this.queryChange }/>
        <button onClick={ () => this.props.searchNews( this.state.query ) }>Search</button>
      </div>
    )
  }
}

export default SearchForm;
