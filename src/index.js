import "./css/main.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import starWarsCharactersApp from "./reducers";
import thunk from "redux-thunk";

let middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
	middleware = [...middleware, logger];
}

const store = createStore(starWarsCharactersApp, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, 
document.getElementById("root"));
registerServiceWorker();
