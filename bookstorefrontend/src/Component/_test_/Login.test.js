import React from 'react'
import { shallow } from 'enzyme'

import Login from '../SignIn/SignIn'

describe('Login Component', () => {
    //testing rendering of login component
    it('should render without throwing an error', () => {
        expect(shallow( < Login / > ).exists()).toBe(true)
    })
})

describe("Button Component Tests", () => {
    it("Renders correctly in DOM", () => {
        shallow( <
            button text = "Test" / >
        );
    })
})