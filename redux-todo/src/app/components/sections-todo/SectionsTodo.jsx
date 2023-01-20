import React, {useState} from "react";

import {store} from "../../redux/store/store";

import "./sections-todo.css";
import listItemCreatorAction from "../../redux/actions/listItemCreatorAction";

const SectionsTodo = () => {
    const [listItemValue, setListItemValue] = useState('');


    const onChangeListItemHandle = (event) => {
        setListItemValue(event.target.value);
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();
        store.dispatch(listItemCreatorAction(listItemValue, listItemValue));
    }


    console.log(store.getState())

    return (
        <section className="todo__section-content">
            <form onSubmit={onSubmitHandle} className="todo__list-item-create">
                {/*<div className="todo__input-content">*/}
                    <input
                        className="todo__input"
                        name="list-item"
                        type="text"
                        value={listItemValue}
                        onChange={onChangeListItemHandle}
                    />
                    <input type="submit" hidden/>
                {/*</div>*/}
            </form>
            <div className="todo__list-content">
                <ul className="todo__list">
                    <li className="todo__list-item">13</li>
                    <li className="todo__list-item">10</li>
                    <li className="todo__list-item">93</li>
                </ul>
            </div>
        </section>
    );
}

export default SectionsTodo;