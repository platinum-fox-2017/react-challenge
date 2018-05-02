import sinon from 'sinon';
import NewList from './newslist';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import renderer from 'react-test-renderer';
import {componentDidMount, getNewsByCategory, searchArticles} from './newslist'
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from './SearchForm'
import store from '../stores'

configure({ adapter: new Adapter() })

describe('<NewList />', () => {
  const articles = [{
    title: 'title',
    description: 'description',
    urlToImage: 'url'
  }
  ]
  
  const wrapper = shallow(<NewList store={store} />)
  it('should render <Newslist />', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.find('div').first().hasClass('container'))
  })
  it('render component', () => {
    expect(wrapper.containsAllMatchingElements([
      <div className="container content">
        <div className="row">
         {
           articles.map(function (article, index){
             return <div className="col col-md-3 newsItem text-left" key={index}>
                      <img key={article.title} alt={article.title} src={article.urlToImage} height="140" width="260"/>
                      <Link to={`category/article/${article.title}`}> { article.title }</Link>
                    </div>
           })
          }
        </div>
      </div>
    ]))
  })
  test('should check methods', () => {
    expect(wrapper.instance().componentDidMount).toBeDefined()
    expect(wrapper.instance().getNewsByCategory)
    expect(wrapper.instance().props.searchArticles)
  })
})


