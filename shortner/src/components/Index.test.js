import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from './Index';


describe('Index component test', () => {
   test('renders without crashing', () => {
      let index = mount(<Index />);
      expect(index).toMatchSnapshot();
    });
});
