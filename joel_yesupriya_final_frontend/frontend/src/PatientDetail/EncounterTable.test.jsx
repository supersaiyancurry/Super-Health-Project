import React from 'react';
import { shallow } from 'enzyme';
import EncounterTable from './EncounterTable';
/*eslint no-undef: 0*/

describe('EncounterTable', () => {
    it('has all of the things listed', () => {
        let wrapper = shallow(<EncounterTable />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('span').exists()).toBe(true);
        expect(wrapper.find('td').exists()).toBe(true);
        expect(wrapper.find('tr').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });
});