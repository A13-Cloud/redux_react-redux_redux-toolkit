import React from "react";

import HeaderTodo from "./components/header-todo/HeaderTodo";
import SectionsTodo from "./components/sections-todo/SectionsTodo";
import FooterTodo from "./components/footer-todo/FooterTodo";

import './App.css';

const App = () => {
    return (
        <main className="app">
            <div className="todo__wrapper">
                <HeaderTodo/>
                <SectionsTodo/>
                <FooterTodo/>
            </div>
        </main>
    );
}

export default App;
