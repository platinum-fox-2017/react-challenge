import React, {Component} from 'react';
import { connect } from 'react-redux'
import { searchStory, clearSearch } from '../redux/actions'
import { bindActionCreators } from 'redux'

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      query: '',
      isSearch: false
    }
  }
  changeInput = (e) => {
    this.setState({query: e.target.value})
  }

  submitSearch = () => {
    this.props.searchStory(this.state.query)
  }

  clearSearch = () => {
    this.setState({query: ''})
    this.props.clearSearch()
  }
  render () {
    return (
      <div>
        <input type="text" className="input-text" value={this.state.query} onChange={this.changeInput} />
        <button className="button" onClick={this.submitSearch}>Search </button>
        <button className="button" onClick={this.clearSearch}>Clear</button>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({searchStory, clearSearch}, dispatch) 
export default connect(null, mapDispatchToProps)(SearchForm)
