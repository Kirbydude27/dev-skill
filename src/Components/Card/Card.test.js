import React from 'react'
import Card from './Card'
import { shallow } from '../../enzyme'

describe('Testing card', () => {

    it('should render a card', () => {
        shallow(<Card />);
    });

    it('should test if the button works', () => {
        const wrapper = shallow(<Card overview={'?'} release={'?'}/>);
        expect(wrapper.find('button').text()).toBe('See More');
        wrapper.find('button').simulate('click');
        wrapper.update();
        expect(wrapper.find('button').text()).toBe('See Less');
        expect(wrapper.find('.details').text()).toBe('? Released on ?');
        wrapper.find('button').simulate('click');
        wrapper.update();
        expect(wrapper.find('button').text()).toBe('See More');
    });

    it('should show a placeholder image', () => {
        const wrapper = shallow(<Card image={null}/>);
        expect(wrapper.find('img').prop('src')).toBe('https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg');
    });
});