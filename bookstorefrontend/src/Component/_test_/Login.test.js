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
    it("Renders correctly in DOM", () => {
        shallow( <
            button text = "Test" / >
        );
    })
})