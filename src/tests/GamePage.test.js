import React from 'react';
import GamePage from '../components/GamePage';
import { shallow } from 'enzyme';

describe('GamePage Testing', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GamePage />);
    });

    test('render game page header', () => {
        expect(wrapper.find('h1').text()).toContain('Game Page');
    });
});