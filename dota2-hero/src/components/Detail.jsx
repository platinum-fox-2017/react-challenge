import React, { Component } from 'react'
import Axios from 'axios';

export default class Detail extends Component {
  state = {
    hero: {},
    isLoading: true
  }

  componentDidMount() {
    Axios.get('https://api.opendota.com/api/heroStats')
         .then(res => {
           let hero = res.data.filter(hero => hero.id == this.props.match.params.id)[0];
           this.setState(prev => ({
             hero: { ...prev.hero, ...hero },
             isLoading: false
           }));
         });
  }

  render() {
    return (
      <div className="detail">
        <nav className="detail-content">
          { this.state.isLoading ? <div>loading</div> :
          <nav>
          <nav>
            <img src={ 'https://api.opendota.com' + this.state.hero.img }/>
          </nav>
          <nav>
            <nav>
              <p>Name : <span>{ this.state.hero.localized_name }</span></p>
              <p>Primary Attribute : <span>{ this.state.hero.primary_attr }</span></p>
              <p>Attack Type : <span>{ this.state.hero.attack_type }</span></p>
              <p>Roles : <span>{ this.state.hero.roles.join(', ') }</span></p>
            </nav>
          </nav>
          </nav>
          }
        </nav>
      </div>
    )
  }
}
