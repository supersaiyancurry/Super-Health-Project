import React from 'react';
import { shallow } from 'enzyme';
import CreatePatient from './CreatePatient';
/*eslint no-undef: 0*/

describe('CreatePatient', () => {
    it('has all of the things listed', () => {
        let wrapper = shallow(<CreatePatient />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('h1').text()).toEqual('Create Patient:');
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('label').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });
});