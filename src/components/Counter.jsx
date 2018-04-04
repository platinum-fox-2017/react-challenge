import React, { Component } from 'react';
import firebase from 'firebase';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        var counters = firebase.database().ref('counter');
        counters.on('value', function (snapshot) {
            this.setState({
                counter: snapshot.val()
            });
        }.bind(this));
    }

    increment = () => {
        firebase.database().ref('counter').set(this.state.counter + 1)
    }

    decrement = () => {
        firebase.database().ref('counter').set(this.state.counter - 1)
    }

    render() {
        return (
            <div>
                <h1>Hi! I'm a counter</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.decrement} style={{margin: 7, width: 30, height: 30}}> - </button>
                <button onClick={this.increment} style={{margin: 7, width: 30, height: 30}}> + </button>
            </div>
        )
    }
}

export default Counter;