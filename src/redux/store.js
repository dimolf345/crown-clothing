import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

//applyMiddleware function takes an infinite numbers of arguments,
//the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
