import React from "react";

import HeaderTodo from "./components/header-todo/HeaderTodo";
import SectionsTodo from "./components/sections-todo/SectionsTodo";
import FooterTodo from "./components/footer-todo/FooterTodo";

import './AppTodo.css';

const AppTodo = () => {
  return (
    <main className="appTodo">
      <HeaderTodo />
      <SectionsTodo />
      <FooterTodo />
    </main>
  );
}

export default AppTodo;
