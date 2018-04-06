import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Lost extends Component {
  render() { 
    return (
        <div>
          <h3>Hayooo mau ngapain ??</h3>
          <br/>
          <Link to='/'>
            <button class="btn btn-success">Back Home</button>
          </Link>
        </div>
    )
  }
}
 
export default Lost ;