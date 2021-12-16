import React from 'react';
import { shallow } from 'enzyme';
import Login from '../customcomponents/Login';
/*eslint no-undef: 0*/

describe('Login tests', () => {
    it('should test that LoginPage is being rendered', () => {
        let wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('div').exists()).toBe(true);
    });
    it('Check to see if prop callback can be called', () => {
        let wrapper = shallow(<Login />);
        let mockFn = jest.fn();
        wrapper.setProps({
            handleLogin: mockFn
        });
        let mockEvent = {
            preventDefault: jest.fn(),
            target: {
                username: {
                    value: 'foo'
                },
                password: {
                    value: 'bar'
                }
            }
        };
        const inst = wrapper.instance();
        wrapper.find('#loginform').simulate('submit');
        inst.handleLogin(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();

    });
});