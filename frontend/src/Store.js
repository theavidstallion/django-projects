import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"; // Change the import path
import { thunk } from "redux-thunk"; // Corrected import statement, removed curly braces

import MainReducer from "./reducer/MainReducer";

const initialState = {};
const middleware = [thunk];

// Conditional application of composeWithDevTools
const enhancer = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware);

const Store = createStore(
    MainReducer,
    initialState,
    enhancer
);

export default Store;
