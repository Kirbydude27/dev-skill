import React from 'react'
import CardList from './CardList'
import { shallow } from '../../enzyme'

describe('Testing card list', () => {

    it('should render an empty card list', () => {
        shallow(<CardList movies={[]}/>);
    });

    it('should give info about a given movie', () => {
        const movies = []
        movies[0] = {
            poster_path: '../../missing_image.png',
            title: '?',
            overview: '?',
            release_date: "?"
        }
        const wrapper = shallow(<CardList movies={movies}/>);
        expect(wrapper.find('Card').prop('image')).toBe('../../missing_image.png');
        expect(wrapper.find('Card').prop('title')).toBe('?');
        expect(wrapper.find('Card').prop('overview')).toBe('?');
        expect(wrapper.find('Card').prop('release')).toBe('?');
    });
});