import React from 'react';
import App from './app';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should render 1 <App /> component', () => {
    const component = shallow(<App />);
    console.log(component);
  });
});
