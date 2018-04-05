import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, increment, decrement } from '../store/counter/counter.actions';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';

class Counter extends Component {

    componentDidMount() {
        this.props.getData();
    }

    increment = () => {
        this.props.increment(this.props.count.data)
    }

    decrement = () => {
        this.props.decrement(this.props.count.data)
    }

    render() {
        if (this.props.count.loading){
            return (
            <div>
                <h1>Hi! I'm a counter</h1>
                <Loader type="TailSpin" color="#3F51B5" height={48} width={48} />
                <button onClick={this.decrement} style={{ margin: 7, width: 30, height: 30 }}> - </button>
                <button onClick={this.increment} style={{ margin: 7, width: 30, height: 30 }}> + </button>
            </div> 
            )
        }
        return (
            <div>
                <h1>Hi! I'm a counter</h1>
                <h2>{this.props.count.data}</h2>
                <button onClick={this.decrement} style={{ margin: 7, width: 30, height: 30 }}> - </button>
                <button onClick={this.increment} style={{ margin: 7, width: 30, height: 30 }}> + </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getData,
    increment,
    decrement
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);