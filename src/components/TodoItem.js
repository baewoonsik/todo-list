import React from "react";
import "./TodoItem.css";

function TodoItem({ text, checked, id, onToggle, onRemove }) {
  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(id);
        }}
      >
        X
      </div>
      <div className={`todo-text ${checked ? "checked" : ""}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
}

export default TodoItem;
