import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsById } from '../store/news/news.actions';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class NewsButtonSwitch extends Component {

    getNewsById (id) {
        this.props.getNewsById(id);
    }

    render() { 
        if(this.props.id === 'cnn'){
            return (  
                <div className="news-btn-container">
                    <Link to="/news/cnn"><button className="btn btn-info margin-5" onClick={() => this.getNewsById('cnn')}>CNN</button></Link>
                    <Link to="/news/bbc-news"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('bbc-news')}>BBC NEWS</button></Link>
                    <Link to="/news/techcrunch"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('techcrunch')}>TECHCRUNCH</button></Link>
                </div>
            )
        }
        if(this.props.id === 'bbc-news'){
            return (  
                <div className="news-btn-container">
                    <Link to="/news/cnn"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('cnn')}>CNN</button></Link>
                    <Link to="/news/bbc-news"><button className="btn btn-info margin-5" onClick={() => this.getNewsById('bbc-news')}>BBC NEWS</button></Link>
                    <Link to="/news/techcrunch"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('techcrunch')}>TECHCRUNCH</button></Link>
                </div>
            )
        }
        if(this.props.id === 'techcrunch'){
            return (  
                <div className="news-btn-container">
                    <Link to="/news/cnn"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('cnn')}>CNN</button></Link>
                    <Link to="/news/bbc-news"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('bbc-news')}>BBC NEWS</button></Link>
                    <Link to="/news/techcrunch"><button className="btn btn-info margin-5" onClick={() => this.getNewsById('techcrunch')}>TECHCRUNCH</button></Link>
                </div>
            )
        }
        return (  
            <div className="news-btn-container">
                <Link to="/news/cnn"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('cnn')}>CNN</button></Link>
                <Link to="/news/bbc-news"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('bbc-news')}>BBC NEWS</button></Link>
                <Link to="/news/techcrunch"><button className="btn btn-default margin-5" onClick={() => this.getNewsById('techcrunch')}>TECHCRUNCH</button></Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNewsById
  }, dispatch)


export default connect(null, mapDispatchToProps)(NewsButtonSwitch);