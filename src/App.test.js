import React from 'react';
import App from './App';

it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("section.container").length).toBe(1);
});
