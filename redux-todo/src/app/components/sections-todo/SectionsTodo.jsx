import React from "react";


import "./SectionsTodo.css";

const SectionsTodo = () => {

    return (
        <section className="todo__section-content">
            <div className="todo__input-content">
                <input className="todo__input" type="text"/>
            </div>
            {/*TODO ===> */}
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