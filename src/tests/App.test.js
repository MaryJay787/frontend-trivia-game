import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

// expect(wrapper.find("#link-to-next-page").text())

describe('Trivia Testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('render learn react link', () => {
    expect(wrapper.find('header').text()).toContain("A Trivia App");
  });

  test('render start button', () => {
    expect(wrapper.find('.str-game-btn').text()).toBe('Start Game');
  });

  test('render a start button click event and game page', () => {
    wrapper.find('.str-game-btn').simulate("click");
  });

  
});

