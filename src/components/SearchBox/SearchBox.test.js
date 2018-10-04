import React from 'react';
import SearchBox from './index';

describe("<SearchBox/>", () => {

	const props = {

	};

	beforeEach(() => {
		props.handleOnSearch = jest.fn();
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<SearchBox/>);
		expect(wrapper.find("button").length).toBe(1);
	});

	it("should call the handleOnSearch prop upon clicking the search button if it's not empty", () => {
		const wrapper = shallow(<SearchBox {...props}/>);
		wrapper.find("input").simulate("change", {target:{value:"ok"}});
		wrapper.find("button").simulate("click");
		expect(props.handleOnSearch.mock.calls.length).toBe(1);
	});

	it("shouldn't call the handleOnSearch prop upon clicking the search button if it's empty", () => {
		const wrapper = shallow(<SearchBox {...props}/>);
		wrapper.find("button").simulate("click");
		expect(props.handleOnSearch.mock.calls.length).toBe(0);
	});

	it("should call the handleOnSearch prop upon pressing Enter on the input if it's not empty", () => {
		const wrapper = shallow(<SearchBox {...props}/>);
		wrapper.find("input").simulate("change", {target:{value:"er"}});
		wrapper.find("input").simulate("keypress", {key:"Enter"});
		expect(props.handleOnSearch.mock.calls.length).toBe(1);
	});

});
