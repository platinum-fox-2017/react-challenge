import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from 'react-loading-components';
import { setSelectedHero } from '../redux/actions';

const MapStateToProps = (state) => {
  return {
    loading: state.heroes.loading,
    error: state.heroes.error,
    hero: state.heroes.selectedData
  }
}

const MapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedHero,
}, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(class Detail extends Component {
  componentDidMount() {
    this.props.setSelectedHero(this.props.match.params.id);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="detail">
          <nav className="detail-content">
            <div className="loading"><Loading type='puff' width={100} height={100} fill='#fff' /></div>
          </nav>
        </div>
      )
    } else if (this.props.error) {
      return (<div className="detail">
        <nav className="detail-content">
          <div className="loading">Error</div>
        </nav>
      </div>)
    } else {
      return (
        <div className="detail">
          <nav className="detail-content">
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
          </nav>
        </div>
      )
    }
  }
})
