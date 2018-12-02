import React, {cloneElement } from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../Navbar/Navbar';

let wrapper;

describe('Navbar component', () => {
    wrapper = mount(
        <BrowserRouter>
            <NavBar />        
        </BrowserRouter>
    )

    it('should show log in if user is not logged in', () => {
        wrapper.setProps({
            children: cloneElement(wrapper.props().children, { isLoggedIn: false})
        })
        expect(wrapper.render().text()).toContain('Log in')
    })

    it('should show log out if user is logged in', () => {
        wrapper.setProps({
            children: cloneElement(wrapper.props().children, { isLoggedIn: true})
        })
        expect(wrapper.render().text()).toContain('Log out')
    })
})