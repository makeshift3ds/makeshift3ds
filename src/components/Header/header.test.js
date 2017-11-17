import React from 'react';
import Header from './header.jsx';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('should render 1 <Header /> component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});
