import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { inputNumReducer } from "./inputNumReducer";
import { inputAddressReducer} from "./inputAddressReducer";
import { inputTitleReducer } from "./inputTitleReducer";
import { inputEventReducer } from "./inputEventReducer";
import { inputDescReducer} from "./inputDescReducer";
import { inputImgReducer } from "./inputImgReducer";
import { inputDateReducer } from "./inputDateReducer";


export const rootReducer=combineReducers({
     inputReducer,
     inputNumReducer,
     inputAddressReducer,
     inputTitleReducer,
     inputEventReducer,
     inputDescReducer,
     inputImgReducer,
     inputDateReducer
});