import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchData,fetchCategory} from '../store/news/news.action' 
import {Link} from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import Articles from './articleredux'
import NewsButtonSwitch from './newsbutton'
import { bindActionCreators } from 'redux';

class NewsRedux extends Component {

  constructor() {
    super();
    this.state = {
     
    }
  }

  componentDidMount = () => {
    let category = this.props.match.params.category
      if(category){
        this.props.fetchCategory(category)
      }else{
        this.props.fetchData() 
     }
  }

  render() {
    const {news} = this.props 
    return (  
      <div className="container" style={styles.container}>

        <div style={styles.row} className="row">
          <Link to='/'>
          <button className="btn btn-danger">Home</button>
          </Link> 
          <NewsButtonSwitch category={this.props.match.params.category} />
        </div>
      {news.length > 0 ? news.map(data =>
         <Articles data={data} key={data.url}/>
       ):<div  style={styles.gif} className='sweet-loading'>
          <RingLoader color={'#123abc'} size={100} loading={this.state.loading}/>
        </div>}
    </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    news: state.reducerNews.news
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData,
    fetchCategory
  },dispatch)

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
    marginBottom: '40px',
    marginLeft: '10px'
  },
  media:{
    backgroundColor: 'grey'
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewsRedux);