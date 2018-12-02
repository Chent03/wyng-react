import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import { Poll } from '../Poll/Poll';
import Spinner from '../UI/Spinner/Spinner';
import BarChart from '../UI/BarChart/BarChart';

let wrapper;
describe('Poll Component', () => {
    beforeEach(() => {
        const initState = {
            isLoggedIn: false,
            fetchImages: () => {}
        }

        wrapper = shallow(
            <Poll {...initState}/>
        )
    })

    it('should redirect if user is not logged in or has not voted', () => {
        expect(wrapper.find(Redirect).length).toEqual(1);
        wrapper.setProps({
            isLoggedIn: true,
            voted: false
        })
        expect(wrapper.find(Redirect).length).toEqual(1);
    })

    it('should display spinner if loading', () => {
        wrapper.setProps({
            isLoggedIn: true,
            voted: true,
            loading: true
        });
        expect(wrapper.find(Spinner).length).toEqual(1);
    })

    it('should display a BarChart when done loading and no error', () => {
        wrapper.setProps({
            isLoggedIn: true,
            voted: true,
            loading: false
        });
        expect(wrapper.find(BarChart).length).toEqual(1);
    })

})