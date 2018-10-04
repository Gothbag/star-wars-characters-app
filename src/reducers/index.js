import { combineReducers } from "redux";
import lists from "./lists";

const starWarsCharactersApp = combineReducers({
	lists
});

export default starWarsCharactersApp;
