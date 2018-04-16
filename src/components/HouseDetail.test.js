import React from 'react';
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'
Enzyme.configure({ adapter: new Adapter() });

import store from '../store/index'
import HouseDetail from './HouseDetail'

describe('HouseDetail component', ()=>{
  it('HouseDetail found', () =>{
    const wrapper = shallow(<HouseDetail store={ store }/>)
    expect(wrapper).toHaveLength(1)
  })

  it('Loading is false', () =>{
    const wrapper = shallow(<HouseDetail store={ store }/>)
    expect(wrapper.props().house.loading).toBe(false);
  })

  it('list group is not printing', () =>{
    const wrapper = shallow(<HouseDetail store={ store }/>)
    const p = wrapper.find('.list-group')
    expect(p).toHaveLength(0)
  })

  it('Error is false', () =>{
    const wrapper = shallow(<HouseDetail store={ store }/>)
    expect(wrapper.props().house.error).toBe(false);
  })

  it('list group is not printing', () =>{
    const wrapper = shallow(<HouseDetail store={ store }/>)
    const p = wrapper.find('.col-md-6')
    expect(p).toHaveLength(0)
  })

  it('list group is not printing', () =>{
    const wrapper = shallow(<HouseDetail store={ store }/>)
    const p = wrapper.find('.offset-md-3')
    expect(p).toHaveLength(0)
  })
})