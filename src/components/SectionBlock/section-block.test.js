import React from 'react';
import SectionBlock from './section-block.jsx';
import { shallow } from 'enzyme';

describe('<SectionBlock />', () => {
  it('should render 1 <SectionBlock /> component', () => {
    const component = shallow(<SectionBlock />);
    expect(component).toHaveLength(1);
  });

  it('should render 1 h2 block element', () => {
    const component = shallow(<SectionBlock />);
    expect(component.find('h1')).toHaveLength(1);
  });
});
