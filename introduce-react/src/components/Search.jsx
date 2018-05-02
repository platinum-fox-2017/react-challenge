import React from 'react'

class SearchTeam extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  input = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render () {
    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">Name</label>
            <input type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Search team"
              name="newTeam"
              onChange={ this.input }
              />
          </div>
          <div className="col-auto">
            <button onClick={() => this.props.searchit(this.state.search)} type="button" className="btn btn-primary mb-2">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}






export default SearchTeam
