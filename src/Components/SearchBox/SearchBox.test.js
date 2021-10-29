import React from 'react'
import App from '../../App'
import SearchBox from './SearchBox'
import { shallow } from '../../enzyme'

describe('Testing search box', () => {

    it('should render the search box', () => {
        shallow(<SearchBox />);
    });
});