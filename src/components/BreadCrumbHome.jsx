import React from 'react'
import {Link} from 'react-router-dom'

const BreadCrumbHome = () => {
  return (
    <ul className="breadcrumb">
      <li><Link to="/" >Home</Link></li>
    </ul>
  )          
}
export default BreadCrumbHome
