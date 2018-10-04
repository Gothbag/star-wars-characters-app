import { connect } from "react-redux"

import Home from "../components/Home";
import { loadCharacter, loadFilms, loadSingleton } from "../actions/characterData";
import { listConsts } from "../reducers/lists";

const { CHARACTERS, PLANETS, FILMS, SPECIES } = listConsts;

const mapStateToProps = state => {
	const { lists } = state;
	return {
		character: lists[CHARACTERS].focus,
		films: lists[FILMS].elements,
	    planets: lists[PLANETS].elements,
	    species: lists[SPECIES].elements
	}; 
}

const mapDispatchToProps = dispatch => ({
	loadCharacter: searchTerm => dispatch(loadCharacter(searchTerm)),
	loadFilms: () => dispatch(loadFilms()),
    loadPlanet: id => dispatch(loadSingleton(id, "planets", PLANETS)),
    loadSpecies: id => dispatch(loadSingleton(id, "species", SPECIES))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
