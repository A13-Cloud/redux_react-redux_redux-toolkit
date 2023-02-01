import React from "react";


import "./footer.css";

const Footer = () => {


    return (
        <footer className="todo__footer-content">
            <div className="todo__result-content">
                <ul className="todo__tabs-list">
                    <li className="tabs__tabs-list-item">To Do</li>
                    <li className="tabs__tabs-list-item">In Progress</li>
                    <li className="tabs__tabs-list-item">Done</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;