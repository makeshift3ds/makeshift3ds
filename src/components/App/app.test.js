import React from 'react';
import App from './app.jsx';
import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
  it('should render 1 <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });

  it('should contain #app id', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#app')).toHaveLength(1);
  });

  it('should handle props', () => {
    const wrapper = mount(<App foo="bar" />);
    expect(wrapper.props().foo).toBe('bar');
  });

  it('should render header component', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('header')).toHaveLength(1);
  });
});
