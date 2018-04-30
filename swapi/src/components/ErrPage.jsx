import React, { Component } from 'react';

class ErrPage extends Component {
  render() {
    return (
      <div>
        <img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/alakazam-2.gif" alt="alakazam" className="onerr"/>
        <h1>Oops... The Page You Were Looking For Doesn't Exist</h1>
      </div>
    );
  }
}

export default ErrPage;