import { combineReducers } from "redux";
import { likesReducer } from './likesReduser'
import {inputReducer} from "./inputReduser";
import {commentsReducer} from "./commentsReducer";
import {commentDelete, commentUpdate} from "./actions";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    commentUpdate,
    commentDelete,
})