import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { isEmpty, noop } from "lodash";

import "./CharacterCard.css";

import { getIdFromUrl } from "../../helpers/getHelpers";

class CharacterCard extends React.PureComponent {

    static propTypes = {
        films: PropTypes.objectOf(PropTypes.string),
        character: PropTypes.shape({
        	birthYear: PropTypes.string,
        	gender: PropTypes.string,
            name: PropTypes.string.isRequired
        }),
        loadPlanet: PropTypes.func,
        loadSpecies: PropTypes.func,
        planets: PropTypes.objectOf(PropTypes.string),
        species: PropTypes.objectOf(PropTypes.string)
    }

    static defaultProps = {
        films: {},
    	character: {},
    	loadPlanet: noop,
      	loadSpecies: noop,
        planets: {},
        species: {}
    }

    componentDidUpdate() {
        const { props: { character, planets, species, loadPlanet, loadSpecies } } = this;
        if (!isEmpty(character) && !(species && species[character.species])) {
        	loadSpecies(character.species);
        }
        if (!isEmpty(character) && !(planets && planets[getIdFromUrl(character.homeworld)])) {
        	loadPlanet(character.homeworld);
        }
    }

    getFilmStr = films => Array.isArray(films) ? films.map(film => this.props.films[film]).join(", ") : [];

    render() {
        const { getFilmStr, props: { character: { birthYear, films, gender, homeworld, name, species: speciesId }, planets, species } } = this;
        return (<div className="panel panel-default">
            <div className="panel-heading">{name || "Search for a character"}</div>
            {!isEmpty(this.props.character) && <Fragment>
                <div className="panel-body">
                    <p>Birth year: {birthYear}</p>
                    {planets[homeworld] && <p>Homeworld: {planets[homeworld]}</p>}
                    {species[speciesId] && <p>Species: {species[speciesId]}</p>}
                    <p>Gender: {gender}</p>
                    <p></p>
                </div>
                <div className="panel-footer">Films: {getFilmStr(films)}</div>
            </Fragment>}
        </div>);
    }
}

export default CharacterCard;
