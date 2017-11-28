import React from 'react';
import Home from './home.jsx';
import SectionBlock from '../SectionBlock/section-block.jsx';
import { shallow } from 'enzyme';

describe('<Home />', () => {
  it('should render 1 <Home /> component', () => {
    const component = shallow(<Home />);
    expect(component).toHaveLength(1);
  });

  it('should render 1 <SectionBlock /> component', () => {
    const component = shallow(<Home />);
    expect(component.find(SectionBlock)).toHaveLength(1);
  });
});
