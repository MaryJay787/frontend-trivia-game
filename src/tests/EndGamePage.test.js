import React from 'react';
import EndGamePage from '../components/EndGamePage';
import { shallow } from 'enzyme';

describe('EndGamePage Testing', () => {
    
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<EndGamePage />);
    });

    test('render end game page header', () => {
        expect(wrapper.find('h1').text()).toContain('Thank You for Playing!');
    });
});