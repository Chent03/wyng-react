import React from 'react';
import { shallow, mount } from 'enzyme';

import { ImageView } from '../Gallery/ImageViews/ImageViews';

let wrapper;
let mockData = 
    {
        "_id": "asd123",
        "title": "animal",
        "imageUrl": "asdas"
    }

describe('ImageView Component', () => {
    beforeEach(() => {
        const props = {
            postVote: () => true,
            modalHandler: () => {},
            loggedIn: true,
            voted: false
        }

        wrapper = mount(
            <ImageView {...props}/>
        )

    })

    it('should show option to vote if not voted', () => {
        wrapper.setProps({
            voted: false
        })
        expect(wrapper.find('i').length).toEqual(1);
    })

    it('should contain show the correct title', () => {
        wrapper.setProps(mockData);
        expect(wrapper.render().text()).toContain(mockData.title)
    })

    it('should not show option to vote if voted', () => {
        wrapper.setProps({
            voted: true
        })
        expect(wrapper.find('i').length).toEqual(0);
    })
})