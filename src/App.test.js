import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe("Trivia Testing", () => {
  test('renders learn react link', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').text()).toContain("A Trivia App");
  });
});

