import React from 'react';
import ArticleBlock from './article-block.jsx';
import { shallow } from 'enzyme';

describe('<ArticleBlock />', () => {
  it('should render 1 <ArticleBlock /> component', () => {
    const mockPost = { id: 1, title: "foo" };
    const component = shallow(<ArticleBlock post={mockPost} />);
    expect(component).toHaveLength(1);
  });

  it('should render 1 h1 block element', () => {
    const mockPost = { id: 1, title: "foo" };
    const component = shallow(<ArticleBlock post={mockPost} />);
    expect(component.find('h2')).toHaveLength(1);
  });
});
