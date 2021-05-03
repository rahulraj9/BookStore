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
        })
})


describe("Button Component Tests", () => {
    it("Renders correctly in DOM", () => {
        shallow( <
            button text = "Test" / >
        );
    })
})