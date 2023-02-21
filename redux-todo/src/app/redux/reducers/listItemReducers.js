import {
    LIST_ITEM_CREATOR,
    LIST_ITEM_DELETE, LIST_ITEM_UPDATE
} from "../types/types";

const initialState = {
    listItems: []
}

const listItemReducers = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ITEM_CREATOR:
            return {
                ...state,
                listItems: [...state.listItems, action.data]
            }
        case LIST_ITEM_UPDATE:
            const updateItem = state.comments.findIndex(index => index.id === action.data.id);

            const withUpdatedItems = [
                ...state.comments.slice(0, updateItem),
                action.data,
                ...state.comments.slice(updateItem + 1)
            ];

            return {
                ...state,
                comments: withUpdatedItems
            };
        case LIST_ITEM_DELETE:
            const deletedItem = state.listItems.findIndex(index => index.id === action.id);
            const withoutDeletedItems = [
                ...state.listItems.slice(0, deletedItem),
                ...state.listItems.slice(deletedItem + 1)
            ];


            return {
                ...state,
                listItems: withoutDeletedItems
            };
        default:
            return state;
    }
}

export default listItemReducers;