import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../store/news/news.action';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class NewsButtonSwitch extends Component {

  getNewsByCategory(category){
    this.props.fetchCategory(category)
  }

  render() { 
    if(this.props.category === 'technology'){
      return (  
        <div className="news-btn-container" style={styles.button}>
          <Link to="/newsRedux/Technology"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('technology')}>Technology</button></Link>
          <Link to="/newsRedux/entertaiment"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('entertainment')}>Entertainment</button></Link>
          <Link to="/newsRedux/science"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('science ')}>Science</button></Link>
        </div>
      )
    }
    if(this.props.category === 'entertaiment'){
      return (  
        <div className="news-btn-container" style={styles.button}>
          <Link to="/newsRedux/Technology"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('technology')}>Technology</button></Link>
          <Link to="/newsRedux/entertaiment"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('entertainment')}>Entertainment</button></Link>
          <Link to="/newsRedux/science"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('science')}>Science</button></Link>
        </div>
      )
    }
    if(this.props.category === 'science'){
      return (  
        <div className="news-btn-container" style={styles.button}>
          <Link to="/newsRedux/Technology"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('technology')}>Technology</button></Link>
          <Link to="/newsRedux/entertaiment"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('entertainment')}>Entertainment</button></Link>
          <Link to="/newsRedux/science"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('science')}>Science</button></Link>
        </div>
      )
    }
    return (  
      <div className="news-btn-container" style={styles.button}>
        <Link to="/newsRedux/Technology"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('technology')}>Technology</button></Link>
        <Link to="/newsRedux/entertaiment"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('entertainment')}>Entertainment</button></Link>
        <Link to="/newsRedux/science"><button className="btn btn-primary " style={styles.category} onClick={() => this.getNewsByCategory('science')}>Science</button></Link>
      </div>
    )
  }
}

const styles={
  button:{
    textAlign: 'center',
    marginLeft: '300px'
  },
  category:{
    marginRight: '10px'
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCategory
}, dispatch)


export default connect(null, mapDispatchToProps)(NewsButtonSwitch);