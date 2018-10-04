import React from 'react';
import CharacterCard from './index';

describe("<CharacterCard/>", () => {

	const props = {

	};

	beforeEach(() => {
		props.loadSpecies = jest.fn();
		props.loadPlanet = jest.fn();
		props.planets = {};
		props.species = {};
		props.character = {};
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<CharacterCard/>);
		expect(wrapper).toMatchSnapshot();
	});

	it("should call the loadPlanet and loadSpecies props if the character is not empty", () => {
		const wrapper = mount(<CharacterCard {...props}/>);
		wrapper.setProps({
			character: { name: "John" }
		});
		expect(props.loadSpecies.mock.calls.length).toBe(1);
		expect(props.loadPlanet.mock.calls.length).toBe(1);
	});

	it("shouldn't call the loadPlanet and loadSpecies props if the planets and species props have matching ids", () => {
		props.character = { name: "John", species: "1", homeworld: "1" };
		props.planets = {
			1: "Tatooine"
		};
		props.species = {
			1: "Human"
		};
		const wrapper = shallow(<CharacterCard {...props}/>);
		expect(props.loadSpecies.mock.calls.length).toBe(0);
		expect(props.loadPlanet.mock.calls.length).toBe(0);
	});

});
