import React from 'react';
import Home from './index';

describe("<Home/>", () => {

	const props = {

	};

	beforeEach(() => {
		props.loadFilms = jest.fn();
		props.films = {};
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<Home/>);
		expect(wrapper.find("SearchBox").length).toBe(1);
	});

	it("should call the loadFilms prop if the films prop is empty", () => {
		const wrapper = mount(<Home {...props}/>);
		expect(props.loadFilms.mock.calls.length).toBe(1);
	});

	it("shouldn't call the loadFilms prop if the films prop is empty", () => {
		props.films = { 1: {
			title: "A New Hope"
		} }
		const wrapper = mount(<Home {...props}/>);
		expect(props.loadFilms.mock.calls.length).toBe(0);
	});

});
