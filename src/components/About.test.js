import React from 'react';
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

import About from './About'

describe('About Test Component', () => {
  it('h1 must contain you know nothing jon snow', ()=> {
    const wrapper = mount(<About />)
    const p = wrapper.find('h1');
    expect(p.text()).toBe('YOU KNOW NOTHING JON SNOW');
  })

  it('img must right', () => {
    const wrapper = shallow(<About />)
    const p = wrapper.find('img')
    expect(p.prop('src')).toEqual('https://media0.giphy.com/media/xTcnTehwgRcbgymhTW/giphy.gif')
  })

  it('h1 must only one',()=> {
    const wrapper = shallow(<About />)
    const p = wrapper.find('h1')
    expect(p).toHaveLength(1)
  })
})