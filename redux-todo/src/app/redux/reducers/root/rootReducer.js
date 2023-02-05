import {combineReducers} from "redux";
import listItemReducers from "../listItemReducers";

export const rootReducer = combineReducers({
    listItemReducers: listItemReducers,
});