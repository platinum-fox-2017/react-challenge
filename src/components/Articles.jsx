import React, { Component } from 'react';

class Articles extends Component {

    render() {
        return (
            <div className="media">
                <div className="media-left media-top">
                    <a href={this.props.article.url} target="_blank">
                        <img className="media-object" src={this.props.article.urlToImage} alt={this.props.article.urlToImage} min-width="200" height="100" />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading margin-top-10 justify"><strong>{this.props.article.title}</strong></h4>
                    <p className="margin-top-10 justify">{this.props.article.description}</p>
                </div>
            </div>
        )
    }
}

export default Articles;
