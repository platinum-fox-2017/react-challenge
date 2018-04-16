import React from 'react';

import { shallow, render, mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new Adapter() });

describe('TDD Component <App />', () => {
  it('Test Component App have length 1', ()=> {
    const wrapper = shallow(<App/>)
    expect(wrapper).toHaveLength(1)
  })

  it('Test Component App have nav-item with 3', ()=> {
    const wrapper = mount(<App />)
    const p = wrapper.find('.nav-item');
    expect(p).toHaveLength(3);
  })

  it('Test Component App have class .App-title', ()=> {
    const wrapper = mount(<App />)
    const p = wrapper.find('.App-title');
    expect(p.text()).toBe('Welcome to GOT Wiki');
  })
})