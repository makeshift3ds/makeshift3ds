import React from 'react';
import Header from './header.jsx';
import { shallow, mount } from 'enzyme';

describe('<Header />', () => {
  it('should render 1 <Header /> component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });

  it('should render 1 avatar', () => {
    const component = shallow(<Header />);
    expect(component.find('#header-avatar')).toHaveLength(1);
  });

  it('should render header-content', () => {
    const component = shallow(<Header />);
    expect(component.find('.header-content').text()).toContain(
      'Full Stack Engineer / Designer'
    );
  });

  it('should match snapshot', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
