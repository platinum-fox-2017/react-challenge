import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from 'react-loading-components';
import Card from './Card';
import { setHeroes } from '../redux/actions'

const MapStateToProps = (state) => {
  return {
    heroes: state.heroes
  }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({
  setHeroes,
}, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(class Board extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props.setHeroes();
  }

  render() {
    if (this.props.heroes.loading) {
      return (
        <div className="content">
          <div className="loading"><Loading type='puff' width={100} height={100} fill='#fff' /></div>
        </div>
      );
    } else if (this.props.heroes.error) {
      return (
        <div className="content">
          Error
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="board">
            { this.props.heroes.data.map(hero => <Card id={hero.id} name={hero.localized_name} img_url={hero.img} key={hero.id} attr={hero.primary_attr} />) }
          </div>
        </div>
      );
    }
  }
})
