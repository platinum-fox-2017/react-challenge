import React from 'react'
import logo from '../assets/img/loader.png';

export default  componentName => {
  return (
    <div>
      <img src={logo} className="loader" alt="logo" />
      <p>Awesomeness is Coming . . .</p>  
    </div>
  )
}
