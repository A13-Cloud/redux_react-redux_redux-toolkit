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
            const deletedItem = state.listItems.findIndex(index => index.id === action.id);
            const withoutDeletedItem = [
                ...state.listItems.slice(0, deletedItem),
                ...state.listItems.slice(deletedItem + 1)
            ];



            return {
                ...state,
                listItems: withoutDeletedItem
            };
        default:
            return state;
    }
}

export default listItemReducers;