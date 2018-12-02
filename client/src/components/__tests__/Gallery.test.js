import React from 'react';
import { mount, shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';

import Root from '../../Root';
import { Gallery } from '../Gallery/Gallery';
import ImageView from '../Gallery/ImageViews/ImageViews';
import LoginModal from '../UI/LoginModal/LoginModal';
import Spinner from '../UI/Spinner/Spinner';

let wrapper;

const mockData = [
    {
        "_id": "asd123",
        "title": "animal",
        "imageUrl": "asdas"
    },
    {
        "_id": "asd12",
        "title": "dogs",
        "imageUrl": "asssdas"
    }
]

describe('Fetching Images', () => {
    beforeEach(() => {
        const initState = {
                loading: true,
                images: [],
                errorMsg: false,
                loggedIn: true,
                voted: false,
                fetchImages: () => {}
        }

        wrapper = shallow(
            <Gallery {...initState} />

        )
    })

    it('shows a spinner when fetching data', () => {
        expect(wrapper.find(Spinner).length).toEqual(1);
    })

    it('shows no spinner when loading is false', () => {
        wrapper.setProps({
                loading: false   
        })
        expect(wrapper.find(Spinner).length).toEqual(0);
    })

    it('show an ImageView Component per object', () => {
        wrapper.setProps({
                loading: false,
                images: mockData
        })
        expect(wrapper.find(ImageView).length).toEqual(mockData.length);
    })

    it('redirect if user is logged in and has voted', () => {
        wrapper.setProps({
            voted: true,
            loggedIn: true
        })
        expect(wrapper.find(Redirect).length).toEqual(1);
    })
})