import React from 'react';
import { shallow } from 'enzyme';
import CreateEncounter from './CreateEncounter';
/*eslint no-undef: 0*/

describe('CreateEncounter', () => {
    it('has all of the things listed', () => {
        let wrapper = shallow(<CreateEncounter />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h1').text()).toEqual('Create Encounter:');
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('label').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });
});