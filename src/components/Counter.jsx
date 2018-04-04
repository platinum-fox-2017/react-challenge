import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setCount } from '../redux/actions';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0
    //     }
    // }

    componentDidMount() {
        var counters = firebase.database().ref('counter');
        counters.on('value', function (snapshot) {
            this.props.setCount(snapshot.val())
        }.bind(this));
    }

    increment = () => {
        firebase.database().ref('counter').set(this.props.count + 1)
    }

    decrement = () => {
        firebase.database().ref('counter').set(this.props.count - 1)
    }

    render() {
        return (
            <div>
                <h1>Hi! I'm a counter</h1>
                <h2>{this.props.count}</h2>
                <button onClick={this.decrement} style={{ margin: 7, width: 30, height: 30 }}> - </button>
                <button onClick={this.increment} style={{ margin: 7, width: 30, height: 30 }}> + </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counterReducers.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCount: (payload) => dispatch(setCount(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);