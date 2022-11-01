import React from "react";
import "./TodoListTemplate.css";

function TodoListTemplate({ form, children }) {
  return (
    <main className="todo-list-template">
      <div className="title">TODO LIST</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
}

export default TodoListTemplate;
