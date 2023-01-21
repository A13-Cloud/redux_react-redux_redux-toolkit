import React, {useState} from "react";
import {store} from "../../redux/store/store";
import "./sections-todo.css";
import listItemCreatorAction from "../../redux/actions/listItemCreatorAction";

const SectionsTodo = () => {
    const [listItemValue, setListItemValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const onChangeListItemHandle = (event) => {
        setListItemValue(event.target.value);
    };

    const onSubmitHandle = (event) => {
        event.preventDefault();
        store.dispatch(listItemCreatorAction(listItemValue, `${listItemValue}-${Math.floor(Math.random() * 1000)}`));
        setListItemValue("");
        // setTodoList(store.getState().listItemCreatorReducer.listItems);
    };


    return (
        <section className="todo__section-content">
            <form onSubmit={onSubmitHandle} className="todo__list-item-create">
                <div className="todo__input-content">
                    <input
                        className="todo__input"
                        name="todo__input"
                        type="text"
                        value={listItemValue}
                        onChange={onChangeListItemHandle}
                    />
                    <input type="submit" hidden/>
                </div>
            </form>
            <div className="todo__list-content">
                <ul className="todo__list">
                    {todoList.map(item => {
                            return <li key={item.id} className="todo__list-item">
                                {item.text}
                            </li>
                        }
                    )}
                </ul>
            </div>
        </section>
    );
}

export default SectionsTodo;