import {LIST_ITEM_CREATOR} from "../types/types";

const initialState = {
    listItems: []
}

const listItemCreatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case LIST_ITEM_CREATOR:
           return {
               ...state,
               listItems: [...state.listItems, action.data]
           }
        default:
            return state;
    }
}

export default listItemCreatorReducer;