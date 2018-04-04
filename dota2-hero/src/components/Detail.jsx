import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from 'react-loading-components';
import Axios from 'axios';
import { setSelectedHero } from '../redux/actions'

const MapStateToProps = (state) => {
  return {
    hero: state.selectedHero
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    setSelectedHero: (value) => dispatch(setSelectedHero(value))
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(class Detail extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    Axios.get('https://api.opendota.com/api/heroStats')
         .then(res => {
           this.props.setSelectedHero(res.data.filter(hero => hero.id === Number(this.props.match.params.id))[0]);
           this.setState(prev => ({
             isLoading: false
           }));
          })
  }

  render() {
    return (
      <div className="detail">
        <nav className="detail-content">
          { this.state.isLoading ? <div className="loading"><Loading type='puff' width={100} height={100} fill='#fff' /></div> :
          <nav>
            <nav>
              <img src={ 'https://api.opendota.com' + this.props.hero.img } alt={ this.props.hero.localized_name }/>
            </nav>
            <nav>
              <nav>
                <p>Name : <span>{ this.props.hero.localized_name }</span></p>
                <p>Primary Attribute : <span>{ this.props.hero.primary_attr }</span></p>
                <p>Attack Type : <span>{ this.props.hero.attack_type }</span></p>
                <p>Roles : <span>{ this.props.hero.roles.join(', ') }</span></p>
              </nav>
            </nav>
          </nav>
          }
        </nav>
      </div>
    )
  }
})
