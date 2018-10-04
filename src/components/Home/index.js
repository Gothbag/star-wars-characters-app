import React from "react";
import PropTypes from "prop-types";
import {isEmpty, noop} from "lodash";

import SearchBox from "../SearchBox";
import CharacterCard from "../CharacterCard";

class Home extends React.PureComponent {

    static propTypes = {
        character: PropTypes.shape({
        	birthYear: PropTypes.string,
        	gender: PropTypes.string,
            name: PropTypes.string.isRequired
        }),
        loadCharacter: PropTypes.func,
        loadFilms: PropTypes.func,
        loadPlanet: PropTypes.func,
        loadSpecies: PropTypes.func
    }

    static defaultProps = {
    	character: {},
    	loadCharacter: noop,
        loadFilms: noop,
    	loadPlanet: noop,
      	loadSpecies: noop
    }

    componentDidMount() {
    	const { props: { films, loadFilms } } = this;
    	if (isEmpty(films)) {
    		loadFilms();
    	}
    }

    render() {
        const { props: { character, films, loadCharacter, loadPlanet, loadSpecies, planets, species } } = this;
        return (<section className="col-xs-1-1 col-md-1-3 center">
        	<SearchBox handleOnSearch={loadCharacter}/>
        	<CharacterCard character={character} loadPlanet={loadPlanet} loadSpecies={loadSpecies} planets={planets} species={species} films={films}/>
        </section>);
    }
}

export default Home;
