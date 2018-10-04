import {loadFilms,loadSingleton} from "./characterData";
import configureStore from "redux-mock-store";
import nock from "nock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import { listActions } from "./lists";
import { listConsts } from "../reducers/lists";

describe("character data actions", () => {

    const urlRoot = "https://swapi.co/api";

    let store;
    beforeEach(() => {
        store = mockStore({
            lists: {
                films: {
                    elements: {}
                }
            }
        });
    })

    describe("loadFilms", () => {

        it("should dispatch an action asynchronously", () => { 

            const resp = { results: [{
                title: "A New Hope"
            }] };

            nock(urlRoot)
                .defaultReplyHeaders({ "access-control-allow-origin": '*' })
                .get("/films/")
                .reply(200, resp)

            return store.dispatch(loadFilms()).then(() => {
                expect(store.getActions().length).toEqual(1);
                expect(store.getActions()[0].type).toEqual(listActions.SET_LIST_ELEMENTS)
            });
        });
    });

    describe("loadSingleton", () => {

        it("should dispatch an action asynchronously", () => { 

            const id = 1;

            const resp = { data: {
                url: `url/${1}`,
                name: "Human"
            } };

            nock(urlRoot)
                .defaultReplyHeaders({ "access-control-allow-origin": '*' })
                .get(`/species/${1}`)
                .reply(200, resp)

            return store.dispatch(loadSingleton(id, "species", listConsts.SPECIES)).then(() => {
                expect(store.getActions().length).toEqual(1);
                expect(store.getActions()[0].type).toEqual(listActions.ADD_LIST_ELEMENT)
            });
        });
    });
});
