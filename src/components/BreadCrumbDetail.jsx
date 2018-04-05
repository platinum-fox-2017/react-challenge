import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbDetail = () => {
  return (
    <ul className="breadcrumb">
      <li><Link to="/" >Home</Link></li>
      <li>Detail Story</li>
    </ul>
  )
}

export default BreadCrumbDetail
