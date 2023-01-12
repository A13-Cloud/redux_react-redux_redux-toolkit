import React, {useState} from "react";


import "./SectionsTodo.css";

const SectionsTodo = () => {
    const [todoListItem, setTodoListItem] = useState('');


    const onChangeTodoListItemHandle = (event) => {
        setTodoListItem(event.target.value);
    }

    const onSubmitHandle = (event) => {
        event.preventDefault();
    }

    console.log(todoListItem);

    return (
        <section className="todo__section-content">
            <form onSubmit={onSubmitHandle} className="todo__list-item-create">
                <div className="todo__input-content">
                    <input
                        className="todo__input"
                        type="text"
                        value={todoListItem}
                        onChange={onChangeTodoListItemHandle}
                    />
                </div>
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