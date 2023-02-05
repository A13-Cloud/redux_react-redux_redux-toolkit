import React from "react";
import {store} from "../../../redux/store/store";
import listItemDeleteAction from "../../../redux/actions/listItemDeleteAction";

const ListItem = (props) => {

    const onClickListItemHandle = (event) => {
        event.preventDefault();
        store.dispatch(listItemDeleteAction(props.item.id))
    }

    return <form key={props.item.id} className="list__item">
        <div onClick={onClickListItemHandle} className="item__delete">&times;</div>
        <input className="item" type="text" defaultValue={props.item.text}/>
        <input type="submit" hidden/>
    </form>
}

export default ListItem;