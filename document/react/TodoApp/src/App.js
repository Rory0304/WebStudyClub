import React, { useState, useRef } from "react";
import "./styles.css";
import MakeList from "./MakeList";
import TodoList from "./TodoList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    contents: "",
    type: "",
  });

  const { username, contents, type } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [lists, setlists] = useState([
    {
      id: 1,
      username: "Rory",
      contents: "React 공부하기",
      type: "TODO",
    },
    {
      id: 2,
      username: "Rory",
      contents: "React 공부하기",
      type: "DONE",
    },
  ]);

  const nextId = useRef(3);

  const onCreate = (e) => {
    const list = {
      id: nextId.current,
      username,
      contents,
      type,
    };
    setlists([...lists, list]);
    nextId.current += 1;
    setInputs({
      username: "",
      contents: "",
      type: "",
    });
    document.querySelector('input[name="type"]:checked').checked = false;
  };

  const onRemove = (id) => {
    setlists(lists.filter((list) => list.id !== id));
  };

  const onMove = (id) => {
    setlists(
      lists.map(function (list) {
        if (list.id === id) {
          if (list.type === "TODO") {
            return { ...list, type: "DOING" };
          } else {
            return { ...list, type: "DONE" };
          }
        } else {
          return list;
        }
      })
    );
  };

  console.log(lists);
  return (
    <div className="wrapper">
      <header>
        {" "}
        <h1>Todo List</h1>{" "}
      </header>
      <MakeList
        username={username}
        contents={contents}
        type={type}
        onChange={onChange}
        onCreate={onCreate}
      />
      <TodoList lists={lists} onRemove={onRemove} onMove={onMove} />
    </div>
  );
}

export default App;
