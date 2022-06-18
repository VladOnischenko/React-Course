import { combineReducers } from "redux";
import { likesReducer } from './likesReduser'

export const rootReducer = combineReducers({
    likesReducer,
})