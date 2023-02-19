import React from "react";
import {store} from "../../../redux/store/store";
import listItemDeleteAction from "../../../redux/actions/listItemDeleteAction";

import "./listItem.css";

const ListItem = (props) => {

    const onClickListItemHandle = (event) => {
        event.preventDefault();
        store.dispatch(listItemDeleteAction(props.item.id));

        let currentListItems;
        const handleChange = () => {
            let previousListItems = store.getState().listItemReducers["listItems"];

            if (previousListItems !== currentListItems) {
                currentListItems = previousListItems;
            }
        }
        let unsubscribe = store.subscribe(handleChange);
        handleChange();
        return unsubscribe;
    }

    return <form key={props.item.id} className="list__item">
        <input className="item" type="text" defaultValue={props.item.text}/>
        <div onClick={onClickListItemHandle} className="item__delete">&times;</div>
        <input type="submit" hidden/>
    </form>
}

export default ListItem;