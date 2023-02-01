import React, {useState} from "react";
import {store} from "../../redux/store/store";
import "./content.css";
import listItemCreatorAction from "../../redux/actions/listItemCreatorAction";

const Content = () => {
    const [listItemValue, setListItemValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const onChangeListItemHandle = (event) => {
        setListItemValue(event.target.value);
    };

    const onSubmitHandle = (event) => {
        event.preventDefault();
        store.dispatch(listItemCreatorAction(listItemValue, `${listItemValue}-${Math.floor(Math.random() * 1000)}`));
        setListItemValue("");
        setTodoList(store.getState().listItemCreatorReducer.listItems);
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
                {todoList.map(item => {
                        return <form key={item.id} className="comments-item">
                            <div className="comments-item-delete">&times;</div>
                            <input type="text" value={item.text}/>
                            <input type="submit" hidden/>
                        </form>
                    }
                )}
            </div>
        </section>
    );
}

export default Content;