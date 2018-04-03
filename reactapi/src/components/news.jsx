import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

class hello extends React.Component {
  constructor() {
    super();
    this.state = {
      news : []
    }
  }

  componentDidMount = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f2f62204c96048bd87788897a3d41317')
    .then(data => {
      this.setState({
        news : data.data.articles
      })
    })
    .catch(err => {console.log(err)}) 
  }

  render() { 
    return (  
      <div style={ styles.container } class= "container">
        <div style={styles.row} class="row">
          <Link to='/'>
          <button class="btn btn-danger">Home</button>
          </Link> 
        </div>
        <div class= "row">
        {this.state.news.map(data => 
          <div class="col-md-3" key={data.url}>
            <div style={styles.thumbnail} class="thumbnail">
              <img style={styles.img} class="rounded mx-auto d-block" width="250" height="200" src={data.urlToImage} alt=""/>
              <Link to={`/detailnews/${data.title}/${data.description}/${data.urlToImage}`}>
              <h5>{data.title}</h5>
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: '25px' 
    // border: 'solid 3px #000',
    // fontSize: '24px'
  },
  thumbnail: {
    marginBottom: '10px'
  },
  row: {
    marginBottom: '15px',
    marginLeft: '4px'
  },
  img: {
    marginBottom: '15px'
  }
}
 
export default hello;