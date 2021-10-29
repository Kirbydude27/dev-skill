import React from 'react'
import Nav from './Nav'
import { shallow } from '../../enzyme'

describe('Testing nav bar', () => {
    
    it('should render the nav bar', () => {
        shallow(<Nav />);
    });
});