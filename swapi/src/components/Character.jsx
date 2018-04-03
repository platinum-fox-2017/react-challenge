import React, { Component } from 'react';

class Character extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.charData.name }</h1>
        <p>Birth Year: { this.props.charData.birth_year }</p>
        <p>Gender: { this.props.charData.gender }</p>
        <p>Height: { this.props.charData.height }</p>
        <p>Skin Color: { this.props.charData.skin_color }</p>
        <p>Eye Color: { this.props.charData.eye_color }</p>
        <p>Hair Color: { this.props.charData.hair_color }</p>
      </div>
    );
  }
}

export default Character;