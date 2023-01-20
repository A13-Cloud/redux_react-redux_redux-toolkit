import {createStore} from "redux";
import {rootReducer} from "../reducers/root/rootReducer";

export const store = createStore(rootReducer);
