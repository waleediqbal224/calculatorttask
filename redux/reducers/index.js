import calculatorReducer from "../reducers/calculatorReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ composeWithDevTools, calculatorReducer });

export default rootReducer;
