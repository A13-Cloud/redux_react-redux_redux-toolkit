import React from "react";


import "./footer.css";

const Footer = () => {


    return (
        <footer className="footer__content">
            <div className="tabs">
                <ul className="tabs__list">
                    <li className="tabs__item">To Do</li>
                    <li className="tabs__item">In Progress</li>
                    <li className="tabs__item">Done</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;