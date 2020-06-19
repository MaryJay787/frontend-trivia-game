import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


// expect(wrapper.find("#link-to-next-page").text())

describe("Trivia Testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render learn react link', () => {
    expect(wrapper.find('header').text()).toContain("A Trivia App");
  });

  test('render start button', () => {
    expect(wrapper.find('#str-game-btn').text()).toBe('Start Game');
  });

  test('render a start button click event', () => {
    wrapper.find('#str-game-btn').simulate("click");
  });

  
});

