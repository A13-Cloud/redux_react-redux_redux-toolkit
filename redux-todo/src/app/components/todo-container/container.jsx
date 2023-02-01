import React, {useState} from "react";
import {store} from "../../redux/store/store";
import "./container.css";
import listItemCreatorAction from "../../redux/actions/listItemCreatorAction";

const Container = () => {
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
        <section className="container">
            <form onSubmit={onSubmitHandle} className="list-item__create">
                <div className="input__content">
                    <input
                        className="input__creator"
                        name="input__creator"
                        type="text"
                        value={listItemValue}
                        onChange={onChangeListItemHandle}
                    />
                    <input type="submit" hidden/>
                </div>
            </form>
            <div className="list__content">
                {todoList.map(item => {
                        return <form key={item.id} className="list__item">
                            <div className="item__delete">&times;</div>
                            <input className="item" type="text" value={item.text}/>
                            <input type="submit" hidden/>
                        </form>
                    }
                )}
            </div>
        </section>
    );
}

export default Container;