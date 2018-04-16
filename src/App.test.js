import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { List, Avatar } from 'antd';

import store from './store';
import articlesReducer from './store/articles/articles.reducers'

import ArticleList from './components/ArticleList';
import {ArticleDetail} from './components/ArticleDetail';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Login from './components/Login';
import logo from './logo.svg';
import './App.css';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe(('<App /> testing') , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it(('having <BrowserRouter> and <Route>'), () => {
    expect(wrapper.containsAnyMatchingElements([
      <BrowserRouter />,
      <Route />
    ]))
    .toBe(true)  
  });

  // it('snapshots to renders correctly', () => {
  //   const tree = renderer.create(
  //     <App />
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should have all required components to work', () => {
    expect(wrapper.containsAllMatchingElements([
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div>
              <nav className="pt-navbar pt-dark .modifier">
                <div className="pt-navbar-group pt-align-left">
                  <img src={ logo } className="App-logo" alt="logo" height="52px" width="52px" />
                  <div className="pt-navbar-heading">Simple Blog React</div>
                </div>
                <div className="pt-navbar-group pt-align-right">
                  <Link to="/" className="pt-button pt-minimal pt-icon-book">Blog</Link>
                  <Link to="/repos" className="pt-button pt-minimal pt-icon-git-branch">Repo</Link>
                  <span className="pt-navbar-divider"></span>
                  <Link to="https://github.com/eksant/react-challenge" target="_blank" className="pt-button pt-minimal pt-icon-git-repo"></Link>
                  <Link to="/login" className="pt-button pt-minimal pt-icon-user"> Login</Link>
                </div>
              </nav>
              <Route exact path="/" component={ ArticleList } />
              <Route exact path="/article/:id" component={ ArticleDetail } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/repos" component={ Repos } />
              <Route exact path="/repo/:name" component={ Repo } />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    ]))
  });

  // it('should render link', function() {
  //   const app = mount(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   )
  //   const link = app.contains(
  //     <Link to="/">Blog</Link>
  //   )
  //   expect(link).toBe(true)
  // })
});

describe('login component testing', () => {
  it('should have components', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.exists)
  });
});

describe('repos component testing', () => {
  it('should have components', () => {
    const wrapper = shallow(<Repos />)
    expect(wrapper.exists)
  });
});

describe('article detail component testing', () => {
  it('should have components', () => {
    let match = {
      params: {
        id: 'eksant'
      }
    }

    let articles = {
      loading: false,
      data: {
        _id: 3456789,
        title: 'Testing article',
        content: 'Content Testing',
        createdAt: '2020-20-20'
      }
    }

    let loadArticleById = () => true

    const wrapper = shallow(<ArticleDetail match={match} articles={articles} loadArticleById={loadArticleById} />)
    // console.log(wrapper.debug())
    expect(wrapper.containsAnyMatchingElements([
      <List.Item.Meta
        title={articles.data.title}
        description={articles.data.content}
      />,
      <div>
        2020-20-20
      </div>
    ])).toBe(true)
  });
});

describe('test reducer articles', () => {
  it('reducers init', () => {
    let wrapper
    wrapper = articlesReducer(undefined, {})
    expect(wrapper).toEqual({ 
      loading: false, 
      error: false, 
      datas: [], 
      data: {} 
    })
  });
});
