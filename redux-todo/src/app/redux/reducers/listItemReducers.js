import {
    LIST_ITEM_CREATOR,
    LIST_ITEM_DELETE
} from "../types/types";

const initialState = {
    listItems: []
}

const listItemReducers = (state = initialState, action) => {
    switch(action.type) {
        case LIST_ITEM_CREATOR:
           return {
               ...state,
               listItems: [...state.listItems, action.data]
           }
        case LIST_ITEM_DELETE:
            const withoutDeletedItem = state.listItems.findIndex(index => index.id === action.id);

            return {
                ...state
            };
        default:
            return state;
    }
}

export default listItemReducers;