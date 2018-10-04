import { listActions } from "../../actions/lists";

export const listConsts = {
	CHARACTERS: "people",
	FILMS: "films",
	SPECIES: "species",
	PLANETS: "planets"
};

const baseInitialState = {
    elements: {},
    filter: {
    	value: ""
    }
};

const initialState = {
	[listConsts.CHARACTERS]: {...baseInitialState},
	[listConsts.FILMS]: {...baseInitialState},
	[listConsts.SPECIES]: {...baseInitialState},
	[listConsts.PLANETS]: {...baseInitialState}
};

const elements = (state = {}, action) => {
	switch (action.type) {
		case listActions.ADD_LIST_ELEMENT:
			return {...state, [action.id]: action.payload};
		case listActions.SET_LIST_ELEMENTS:
			return {...action.payload};
		default:
			return state;
	}
};

const filter = (state = {}, action) => {
	switch (action.type) {
		case listActions.SET_LIST_FILTER_VALUE:
			if (state.value === action.value) {
				return state;
			}
			return {...state, value: action.value};
		default:
			return state;
	}
};

const elementLists = (state = initialState, action) => {
  	// make sure a list with the given id exists
	if (!state[action.listId] || !action.type) {
		return state;
	}
	const elementList = state[action.listId];
	switch (action.type) {
		case listActions.ADD_LIST_ELEMENT:
		case listActions.SET_LIST_ELEMENTS:
			return {...state, [action.listId]: {...elementList, elements: elements(elementList.elements, action)}};

		case listActions.SET_LIST_FILTER_VALUE:
			return {...state, [action.listId]: {...elementList, filter: filter(elementList.filter, action)}};
		case listActions.SET_LIST_FOCUS:
			return {...state, [action.listId]: {...elementList, focus: {...action.payload}}};
		default:
			return state;
	}
};

export default elementLists;
