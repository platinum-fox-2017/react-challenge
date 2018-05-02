import sinon from 'sinon';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {handlehange} from './SearchForm'
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from './SearchForm'
import store from '../stores'

configure({ adapter: new Adapter() })

describe('<SearchForm />', () => {
  const wrapper = shallow(<SearchForm store={store} />)  
  test('should check tags', () => {
    expect(wrapper.find('div').first().hasClass('container')).toBe(true);
    expect(wrapper.find('form')).toBeDefined()
    expect(wrapper.find('input')).toBeDefined()
    expect(wrapper.find('button')).toBeDefined()
    expect(wrapper.containsMatchingElement(<Link to ="path"/>))
  });
  
  test('should check handlehange', () => {
    expect(wrapper.instance().handlehange).toBeDefined()
  })
})
