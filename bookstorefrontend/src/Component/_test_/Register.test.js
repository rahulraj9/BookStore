import React from 'react'
import { shallow, mount } from 'enzyme'
import Register from '../SignUp/SignUp'

describe('Registartion Component', () => {
    //testing rendering of Registartion component
    it('should render without throwing an error', () => {
        expect(shallow( < Register / > ).exists()).toBe(true)
    })
    it('renders a email input', () => {
            expect(shallow( < Register / > ).find('#outlined-secondary-email').length).toEqual(1)
        }),
        it('renders a password input', () => {
            expect(shallow( < Register / > ).find('#outlined-secondary-password').length).toEqual(1)
        }),
        it('renders a name input', () => {
            expect(shallow( < Register / > ).find('#outlined-secondary-name').length).toEqual(1)
        })
    it('renders a mobile input', () => {
        expect(shallow( < Register / > ).find('#outlined-secondary-mobile').length).toEqual(1)
    })
})


describe("Button Component Tests", () => {
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