import React from 'react';
import { shallow } from 'enzyme';
import EditPatient from './EditPatient';
/*eslint no-undef: 0*/

describe('EditPatient', () => {
    it('has all of the listed things', () => {
        let wrapper = shallow(<EditPatient />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h1').text()).toEqual('Edit Patient:');
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('label').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });
});