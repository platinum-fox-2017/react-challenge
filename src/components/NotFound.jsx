import React, { Component } from 'react'
import HeaderNav from './HeaderNav'
import notfound from '../not-found.png'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <img src={notfound} alt="not-found" width='70%' style={{marginTop: '50px'}}/>
      </div>
    )
  }
}
