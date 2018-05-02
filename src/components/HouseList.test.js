import React from 'react';
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

import store from '../store/index'
import HouseList from './HouseList.jsx'

describe('HouseList component', () => {
  it('HouseList found', () =>{
    const wrapper = shallow(<HouseList store={ store }/>)
    expect(wrapper).toHaveLength(1)
  })

  it('Loading is false', () =>{
    const wrapper = shallow(<HouseList store={ store }/>)
    expect(wrapper.props().houses.loading).toBe(false);
  })

  it('Error is false', () =>{
    const wrapper = shallow(<HouseList store={ store }/>)
    expect(wrapper.props().houses.error).toBe(false);
  })

  it('list group is not printing', () =>{
    const wrapper = shallow(<HouseList store={ store }/>)
    const p = wrapper.find('.list-group')
    expect(p).toHaveLength(0)
  })

  it('h1 is list of house', () =>{
    const wrapper = shallow(<HouseList store={ store }/>).dive()
    const p = wrapper.find('h1')
    expect(p.text()).toBe('List of House Game Of Thrones');
  })

  it('h1 length must only 1', () =>{
    const wrapper = shallow(<HouseList store={ store }/>).dive()
    const p = wrapper.find('h1')
    expect(p).toHaveLength(1)
  })
})