import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div>
        <img src="https://media.giphy.com/media/inuVmrCvPaPC/giphy.gif" alt="snorlax" className="onload"/>
        <h3>please wait while we process your request</h3>
      </div>
    );
  }
}

export default Loading;