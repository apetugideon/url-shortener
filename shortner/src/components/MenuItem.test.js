import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from './MenuItem';


describe('MenuItem component test', () => {
   test('renders without crashing', () => {
      let menuItem = mount(<MenuItem />);
      expect(menuItem).toMatchSnapshot();
    });
});
