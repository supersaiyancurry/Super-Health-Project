import validateEncounter from './Validation';
import React from 'react';
import { shallow } from 'enzyme';

/*eslint no-undef: 0*/
it('Check to see if handleGetAll can be called', () => {
    window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve();
    });
    let wrapper = shallow(<validateEncounter />);
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'validateEncounter');
    inst.validateEncounter();
    expect(spy).toHaveBeenCalled();
});