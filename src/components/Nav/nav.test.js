import React from 'react';
import Nav from './nav.jsx';
import { shallow } from 'enzyme';

describe('<Nav />', () => {
  it('should render 1 <Nav /> component', () => {
    const component = shallow(<Nav />);
    expect(component).toHaveLength(1);
  });

  it('should render Ken Elliott', () => {
    const component = shallow(<Nav />);
    expect(component.text()).toContain('Ken Elliott');
  });

  it('should render 5 social links', () => {
    const component = shallow(<Nav />);
    expect(component.find('.social-link')).toHaveLength(5);
  });
});
