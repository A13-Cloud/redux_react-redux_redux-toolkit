import React, {useState} from "react";
import {store} from "../../../redux/store/store";
import listItemDeleteAction from "../../../redux/actions/listItemDeleteAction";

import "./listItem.css";
import listItemReducers from "../../../redux/reducers/listItemReducers";
import listItemUpdateAction from "../../../redux/actions/listItemUpdateAction";

const ListItem = (props) => {
    const [listItemText, setListItemText] = useState("");

    const onUpdateListItemHandle = (event) =>
    {
        event.preventDefault();
        store.dispatch(listItemUpdateAction(listItemText, props.item.id));
    }
    const onDeleteListItemHandle = (event) => {
        event.preventDefault();
        store.dispatch(listItemDeleteAction(props.item.id));

        let currentListItems;
        const handleChange = () => {
            let previousListItems = store.getState().listItemReducers["listItems"];

            if (previousListItems !== currentListItems) {
                currentListItems = previousListItems;
                props.onUpdateTodoList();
            }
        }
        let unsubscribe = store.subscribe(handleChange);
        handleChange();
        return unsubscribe;
    }

    // TODO: ===> onChange:

    return <form key={props.item.id} className="list__item" onSubmit={onUpdateListItemHandle}>
        <input className="item" type="text" value={listItemText} defaultValue={props.item.text}/>
        <div onClick={onDeleteListItemHandle} className="item__delete">&times;</div>
        <input type="submit" hidden/>
    </form>
}

export default ListItem;