import React, { Component } from 'react';
import {connect} from 'react-redux'
import {incrementAction, decrementAction, incrementByAction} from '../store/count/count.action'
import {Link} from 'react-router-dom'


class Count extends Component {
  render() { 
    const{angka,incrementByone,incrementByFive,decrementByone} = this.props
    return ( 
      <div class = 'container'>
        <p>Lets count's</p>
        <h1>{angka}</h1>
        <button onClick={incrementByone}>+</button>
        <button onClick={incrementByFive}>+5</button>
        <button onClick={decrementByone}>-</button>
        <Link to={'/'}>
          <div style={{marginTop:'15px'}}>
            <button class="btn btn-danger">Home</button>
          </div>
        </Link>
      </div>
    )
  }
}
 
const mapStateToProps = state => {
  return {
    angka: state.reducerCount.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementByone: () => {dispatch(incrementAction())},
    incrementByFive: () => {dispatch(incrementByAction(5))},
    decrementByone: () => {dispatch(decrementAction())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Count) ;
