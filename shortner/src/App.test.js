import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


describe('App component test', () => {
   test('renders without crashing', () => {
      let app = mount(<App />);
      expect(app).toMatchSnapshot();
    });
});
