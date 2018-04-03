import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';

export default class Board extends Component {
  state = {
    heroes: [],
  }

  componentDidMount() {
    Axios.get('https://api.opendota.com/api/heroStats')
         .then(res => this.setState(prev => ({
           heroes: [...prev.heroes, ...res.data]
         })));
  }

  render() {
    return (
      <div className="content">
        <div className="board">
          { this.state.heroes.map(hero => <Card id={hero.id} name={hero.localized_name} img_url={hero.img} />) }
        </div>
      </div>
    )
  }
}
