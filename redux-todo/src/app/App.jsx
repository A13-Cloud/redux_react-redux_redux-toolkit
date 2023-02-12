import React from "react";

import Header from "./components/todo-header/Header";
import Container from "./components/todo-container/Container";

import './App.css';

const App = () => {
    return (
        <main className="app">
            <div className="todo__wrapper">
                <Header/>
                <Container/>
            </div>
        </main>
    );
}

export default App;
