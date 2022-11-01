import React from "react";
import TodoItem from "./TodoItem";

function TodoItemList({ todos, onToggle, onRemove }) {
  const todoList = todos.map((el) => {
    return (
      <TodoItem
        id={el.id}
        text={el.text}
        checked={el.checked}
        onToggle={onToggle}
        onRemove={onRemove}
        key={el.id}
      />
    );
  });
  return <div>{todoList}</div>;
}

export default TodoItemList;
