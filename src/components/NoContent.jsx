import React, { Component } from 'react';
import image from '../no-content.jpg'

export default class NoContent extends Component {
  render() {
    return (
      <div className="container py-5">
      <h1> I'm Sorry, No Content Available .... </h1>
       <img src={ image } alt=""/> <br/> <br/>
       <a href="/">back to home</a>
      </div>
    )
  }
};
