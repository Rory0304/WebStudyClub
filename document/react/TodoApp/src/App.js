import React, { useState, useRef } from "react";
import "./styles.css";
import MakeList from "./MakeList";
import TodoList from "./TodoList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    contents: "",
    type: ""
  });

  const { username, contents, type } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [lists, setlists] = useState([
    {
      id: 1,
      username: "Rory",
      contents: "React 공부하기",
      type: "TODO"
    },
    {
      id: 1,
      username: "Rory",
      contents: "React 공부하기",
      type: "DONE"
    }
  ]);

  const nextId = useRef(2);

  const onCreate = e => {
    const list = {
      id: nextId.current,
      username,
      contents,
      type
    };
    setlists([...lists, list]);
    nextId.current += 1;
  };

  const onRemove = id => {
    setlists(lists.filter(list => list.id !== id));
  };

  // const onMove = id => {
  //   let result;
  //   lists.map(list => (list.id === id ? (result = list) : list));
  //   setlists(
  //     result.type === "TODO"
  //       ? { ...result, type: "DOING" }
  //       : { ...result, type: "DONG" }
  //   );
  //   console.log(lists);
  // };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <MakeList
        username={username}
        contents={contents}
        type={type}
        onChange={onChange}
        onCreate={onCreate}
      />
      <TodoList lists={lists} onRemove={onRemove} />
    </div>
  );
}

export default App;
