import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="docs-card-example" style={{ width: "65%", paddingTop: "200px", paddingLeft: "30%" }}>
        <div className="pt-card pt-elevation-2">
          <h5>Login User</h5>
          
          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="username">Username</label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <span className="pt-icon pt-icon-user"></span>
                <input id="username" className="pt-input" type="email" placeholder="Email" dir="auto" />
              </div>
            </div>
          </div>
          <div className="pt-form-group pt-inline">
            <label className="pt-label" htmlFor="password">Password</label>
            <div className="pt-form-content">
              <div className="pt-input-group">
                <span className="pt-icon pt-icon-lock"></span>
                <input id="password" className="pt-input" type="password" placeholder="Password" dir="auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
