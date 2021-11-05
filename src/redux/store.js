import { createStore, applyMiddleware } from "redux";
//persistStore allows the browser to keep data from the store
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

//applyMiddleware function takes an infinite numbers of arguments,
//the middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//persistor is the persistend version of our store
const persistor = persistStore(store);

export { store, persistor };
