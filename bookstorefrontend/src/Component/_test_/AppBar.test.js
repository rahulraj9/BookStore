import React from 'react'
import { shallow } from 'enzyme'
import AppBar from '../AppBar/AppBar'
import logoImage from '../../Assets/education.svg'



describe('AppBar Component', () => {
    //testing rendering of AppBar component
    it('should render without throwing an error', () => {
        expect(shallow( < AppBar / > ).exists()).toBe(true)
    })
})
describe("<AppBar />", () => {
    it("renders an image", () => {
        const logo = shallow( < AppBar / > );
        expect(logo.find("img").prop("src")).toEqual(logoImage);

    });
})