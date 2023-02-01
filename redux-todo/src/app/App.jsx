import React from "react";

import Header from "./components/todo-header/Header";
import Content from "./components/todo-content/Content";
import Footer from "./components/todo-footer/Footer";

import './App.css';

const App = () => {
    return (
        <main className="app">
            <div className="todo__wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </main>
    );
}

export default App;
