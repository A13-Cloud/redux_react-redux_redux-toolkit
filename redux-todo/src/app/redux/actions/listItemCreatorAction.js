import {LIST_ITEM_CREATOR} from "../types/types";

const listItemCreatorAction = (text, id) => {
    return {
        type: LIST_ITEM_CREATOR,
        data: {text, id}
    };
};

export default listItemCreatorAction;