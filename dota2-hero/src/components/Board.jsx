import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading-components';
import Axios from 'axios';
import Card from './Card';
import { setHeroes } from '../redux/actions'

const MapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    setHeroes: (value) => dispatch(setHeroes(value))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(class Board extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    Axios.get('https://api.opendota.com/api/heroStats')
         .then(res => {
           this.props.setHeroes(res.data)
           this.setState(prev => ({
            isLoading: false
           }));
          })
  }

  render() {
    return (
      <div className="content">
      {
        this.state.isLoading ?
        <div className="loading"><Loading type='puff' width={100} height={100} fill='#fff' /></div> :
        <div className="board">
          { this.props.heroes.map(hero => <Card id={hero.id} name={hero.localized_name} img_url={hero.img} key={hero.id} />) }
        </div>
      }
      </div>
    )
  }
})
