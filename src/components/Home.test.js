import React from 'react';
import { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

import Home from './Home'

describe('Home Test Component', () => {
  it('h1 must contain welcome', ()=> {
    const wrapper = mount(<Home />)
    const p = wrapper.find('h1');
    expect(p.text()).toBe('Welcome to HOME JON');
  })

  it('h1 length only one', ()=> {
    const wrapper = shallow(<Home />)
    const p = wrapper.find('h1')
    expect(p).toHaveLength(1)
  })

  it('img must right', () => {
    const wrapper = shallow(<Home />)
    const p = wrapper.find('img')
    expect(p.prop('src')).toEqual('https://media0.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif')
  })
})