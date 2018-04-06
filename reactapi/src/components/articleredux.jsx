import React, { Component } from 'react';

class Articles  extends Component {
  
  render() { 
    return ( 
      <div style={styles.thumbnail} className="media" >
        <img className="align-self-center mr-3 rounded mx-auto d-block" src={this.props.data.urlToImage} width="200" height="120" alt=""/>
        <div className="media-body">
          <h5 className="mt-1">{this.props.data.title}</h5>
          <p>{this.props.data.description}</p> 
        </div>
      </div>    
     )
  }
}

const styles = {
  container: {
    marginTop: '20px' 
  },
  thumbnail: {
    marginBottom: '20px'
  },
  img: {
    marginBottom: '15px'
  },
  gif: {
    textAlign: 'center',
    width: '100%'
  },
  row: {
    marginBottom: '15px',
    marginLeft: '10px'
  },
  media:{
    backgroundColor: 'grey'
  }
}
 
export default Articles ;