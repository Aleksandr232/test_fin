import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { inputNumReducer } from "./inputNumReducer";
import { inputAddressReducer} from "./inputAddressReducer";
import { inputTitleReducer } from "./inputTitleReducer";
import { inputEventReducer } from "./inputEventReducer";
import { inputDescReducer} from "./inputDescReducer";


export const rootReducer=combineReducers({
     inputReducer,
     inputNumReducer,
     inputAddressReducer,
     inputTitleReducer,
     inputEventReducer,
     inputDescReducer
});