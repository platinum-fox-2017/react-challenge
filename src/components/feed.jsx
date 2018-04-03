import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Feed extends Component {
  
  render() {
    const { feeds } = this.props
    console.log(feeds)
    return (
      <div>
        <div className="body">
          { 
            feeds.map((feed) => 
              <div key={feed.caption.id} className='box'>
              <Link to={`/images/${feed.caption.id}`}>
                <img src={feed.images.standard_resolution.url} alt="gambar" />
              </Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
};
