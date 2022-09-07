import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { inputNumReducer } from "./inputNumReducer";
import { inputCityReducer } from "./inputCityReducer";

export const rootReducer=combineReducers({
     inputReducer,
     inputNumReducer,
     inputCityReducer
});