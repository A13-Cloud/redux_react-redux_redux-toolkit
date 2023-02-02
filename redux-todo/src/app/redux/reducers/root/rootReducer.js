import {combineReducers} from "redux";
import listItemCreatorReducer from "../listItemCreatorReducer";
import listItemUpdateAction from "../../actions/listItemUpdateAction";


export const rootReducer = combineReducers({
    listItemCreatorReducer,
    listItemUpdateAction
});