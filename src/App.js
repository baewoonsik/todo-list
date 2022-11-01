import React, { useState } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

function App() {
  const todoList = [
    {
      id: 0,
      text: "리액트 소개1",
      checked: false,
    },
    {
      id: 1,
      text: "리액트 소개2",
      checked: false,
    },
    {
      id: 2,
      text: "리액트 소개3",
      checked: false,
    },
  ];

  // 입력된 내용의 상태를 담는 변수
  const [input, setInput] = useState("");
  // 리스트 변화의 상태를 담는 변수
  const [todos, setTodos] = useState(todoList);

  // 새로 추가되는 내용에 대한 Form
  const todoListForm = [
    {
      id: todos.length,
      text: input,
      checked: false,
    },
  ];

  // 입력된 상태를 저장한다.
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // ADD 버튼을 누르면 인풋창은 지워지고 입력한 내용이 todolist 배열에 들어간다.
  const handleCreate = () => {
    setInput("");
    setTodos(todos.concat(todoListForm));
  };

  // 엔터키를 누를 경우 handleCrete 와 같은 동작을 한다.
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleCreate();
  };

  const handleToggle = (id) => {
    // findIndex 함수를 사용해 조건에 맞는(파라미터로 받은 id 와 todos 안에 있는 id 가 일치하는지) 인덱스를 변수에 담는다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];
    // 전개연산자(...)를 사용해 todos 배열을 복사한다
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    setTodos(nextTodos);
  };

  // filter 함수를 사용해 파라미터로 받은 id 를 제외한 내용들을 보여준다.
  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoListTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }
    >
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoListTemplate>
  );
}

export default App;
