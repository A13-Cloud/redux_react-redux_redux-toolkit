import {LIST_ITEM_CREATOR} from "../types/types";

const ListItemCreatorAction = (type, id) => {
    return {
        type: LIST_ITEM_CREATOR,
        id: id
    };
};