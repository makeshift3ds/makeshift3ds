import React from 'react';
import Home from './home.jsx';
import ArticleBlock from '../ArticleBlock/article-block.jsx';
import MockFetch from '../../helpers/mock-fetch';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  it('should render 1 <Home /> component', () => {
    const component = shallow(<Home />);
    expect(component).toHaveLength(1);
  });

  it('should have an empty array as a default state', () => {
    const component = shallow(<Home />);
    expect(component.state().posts).toEqual([]);
  });

  it('should call fetch to get posts', () => {
    global.fetch = jest.fn().mockImplementation(MockFetch);
    const component = shallow(<Home />);
    expect(global.fetch).toBeCalledWith(
      'http://jsonplaceholder.typicode.com/posts'
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
