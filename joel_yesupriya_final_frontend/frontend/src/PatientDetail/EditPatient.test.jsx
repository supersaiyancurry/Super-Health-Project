import React from 'react';
import { shallow } from 'enzyme';
import EditEncounter from './EditEncounter';
/*eslint no-undef: 0*/

describe('EditEncounter', () => {
    it('has all of the listed things', () => {
        let wrapper = shallow(<EditEncounter />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h1').text()).toEqual('Edit Encounter:');
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('label').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });
});