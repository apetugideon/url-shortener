import React from 'react';
import { shallow, mount } from 'enzyme';
import FormAction from './FormAction';


describe('FormAction component test', () => {
   test('renders without crashing', () => {
      let formAction = mount(<FormAction />);
      expect(formAction).toMatchSnapshot();
    });
});
