import React from "react";

import Header from "./components/todo-header/Header";
import Container from "./components/todo-container/container";
import Footer from "./components/todo-footer/Footer";

import './App.css';

const App = () => {
    return (
        <main className="app">
            <div className="todo__wrapper">
                <Header/>
                <Container/>
                <Footer/>
            </div>
        </main>
    );
}

export default App;
