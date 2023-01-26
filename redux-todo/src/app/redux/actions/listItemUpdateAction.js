import {LIST_ITEM_UPDATE} from "../types/types";

export const listItemUpdateAction = (text, id) =>
{
    return {
        type: LIST_ITEM_UPDATE,
        // data: {text, id}
    }
};