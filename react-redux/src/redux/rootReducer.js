import { combineReducers } from "redux";
import { likesReducer } from './likesReduser'
import {inputReducer} from "./inputReduser";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
})