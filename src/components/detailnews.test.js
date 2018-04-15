import sinon from 'sinon';
import DetailNews from './DetailNews';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {componentDidMount} from './DetailNews'
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../stores'

configure({ adapter: new Adapter() })

describe('<DetailNews />', () => {
  const wrapper = shallow(<DetailNews store={store} />)
  const articles = [{
    title: 'menjadi panutan hidup',
    description: 'aku adalah akau',
    urlToImage: 'url'
  }
  ]
  it ('sould be passing article data', () => {
    <div className="container content">
          <div className="row">
          {
            articles.map((article)=>{
             if('title' === article.title){
              return <div className="col col-md-8 offset-md-2 text-left newsItem" key={article.title}>
                <h3>{article.title}</h3>
                <p  className="author">{article.author} - <span className="date">{moment(article.publishedAt).startOf('hour').fromNow()}</span></p>
                <hr/>
                <img alt={article.title} src={article.urlToImage} width='730'/>
                 <p>{article.description}</p>
                 <p><a href={article.url}>Read More</a></p>
                 </div>
             }
            })
          }
          </div>
        </div>
  })
  test('should check H1 tag', ()=>{
    expect(wrapper).toBeDefined()
    expect(wrapper.find('h1')).toBeDefined()
  })
  test('should check componentDidMount', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined()
  })
})


