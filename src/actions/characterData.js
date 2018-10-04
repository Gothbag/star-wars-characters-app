import axios from "axios";

import { addElement, setElements, setFocus } from "./lists";
import { listConsts } from "../reducers/lists";

import { objToCamel } from "../helpers/objectKeyCaseConversion";
import { normalizeBy } from "../helpers/normalizeBy";
import { getIdFromUrl } from "../helpers/getHelpers";

const urlRoot = "https://swapi.co/api/";

export const loadFilms = () => dispatch => axios.get(`${urlRoot}films/`)
    .then(resp => {
        const snakeCaseData = objToCamel(resp.data.results);
        return dispatch(setElements(normalizeBy(snakeCaseData, "title"), listConsts.FILMS));
    })
    .catch(error => {
        return console.log(error);
    });

export const loadSingleton = (id, path, listId, field = "name") => dispatch => axios.get(`${urlRoot}${path}/${id}`)
    .then(resp => {
        const snakeCaseData = objToCamel(resp.data);
        const id = getIdFromUrl(snakeCaseData.url);
        return dispatch(addElement(snakeCaseData[field], id, listId));
    })
    .catch(error => {
        console.log(error);
    });

export const loadCharacter = searchTerm => dispatch => axios.get(`${urlRoot}people/?search=${searchTerm}`)
    .then(resp => {
        const character = objToCamel(resp.data.results[0]);
        character.id = getIdFromUrl(character.url);
        ({ homeworld: character.homeworldUrl, species: [character.speciesUrl] } = character);
        character.homeworld = Number(getIdFromUrl(character.homeworld));
        character.species = Number(getIdFromUrl(character.species[0]));
        character.films = character.films.map(url => getIdFromUrl(url));
        return dispatch(setFocus(character, listConsts.CHARACTERS));
    })
    .catch(error => {
        console.log(error);
    });
