import {LIST_ITEM_DELETE} from "../types/types";

const listItemDeleteAction = (id) => {
    return {
        type: LIST_ITEM_DELETE,
        id
    }
}

export default listItemDeleteAction;