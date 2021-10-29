import React from 'react'
import App from './App'
import { shallow } from './enzyme'

describe('Testing application', () => {

    it('should render without crashing', () => {
        shallow(<App />);
    });
});
