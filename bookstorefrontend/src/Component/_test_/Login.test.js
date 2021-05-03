import React from 'react'
import { shallow } from 'enzyme'

import Login from '../SignIn/SignIn'
import Dashboard from '../DashBoard/DashBoard'

describe('Login Component', () => {
    //testing rendering of login component
    it('should render without throwing an error', () => {
            expect(shallow( < Login / > ).exists()).toBe(true)
        }),
        it('renders a email input', () => {
            expect(shallow( < Login / > ).find('#outlined-email-input').length).toEqual(1)
        }),
        it('renders a password input', () => {
            expect(shallow( < Login / > ).find('#outlined-pass-input').length).toEqual(1)
        })

})

describe("Button Component Tests", () => {
    it('should be defined', () => {
            const wrapper = shallow( < button text = "test" / > )
            expect(wrapper.find('button')).toBeDefined();
        }),
        it("Renders correctly in DOM", () => {
            shallow( <
                button text = "Test" / >
            );
        })
    it("Expects to find button HTML element in the DOM", () => {
        const wrapper = shallow( < button text = "test" / > )
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it("Expects to run onClick function when button is pressed in the DOM", () => {
        const mockFn = jest.fn();
        const wrapper = shallow( < button onClick = { mockFn }
            className = "btn"
            text = "test" / > );
        wrapper.find('button').simulate('click');
        expect(mockFn.mock.calls.length).toEqual(1);
    });
})