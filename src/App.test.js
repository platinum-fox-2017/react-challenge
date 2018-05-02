import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import logo from './logo.svg'

import Newslist from './components/newslist'
import Detailnews from './components/DetailNews'
import Notfound from './components/Notfound'

import store from './stores'

configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe(('<App /> testing') , () => {
  let wrapper = shallow(<App/>);
  it(('should have some navigations'), () => {
    expect(wrapper.containsAnyMatchingElements([
      <BrowserRouter />,
      <Switch/>,
      <Route />,
      <Link to ='/'/>
    ]))
    .toBe(true)  
  });
  it ('should have all require componet to render', ()=> {
    expect(wrapper.containsAllMatchingElements([
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to ='/'><h1 className="App-title">News API</h1></Link>
        </header>
        <div>
            <Switch>
              <Route exact path='/' component={Newslist} />
              <Route exact path='/:category' component={Newslist} />
              <Route exact path='/search' component={Newslist} />
              <Route path='/:category/article/:title' component={Detailnews} />
              <Route component={Notfound}/>
            </Switch>
        </div>
      </div>
      </BrowserRouter>
    ]))
  })
})
