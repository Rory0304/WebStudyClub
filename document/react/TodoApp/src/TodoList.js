import React from "react";

function Lists({ list, onRemove, onMove }) {
  const { id, username, contents, type } = list;
  if (type === "DONE") {
    return (
      <div className={type}>
        <h3> {contents} </h3>
        <p>작성자 : {username}</p>
        <button className="delete" onClick={() => onRemove(id)}>
          삭제
        </button>
      </div>
    );
  } else {
    return (
      <div className={type}>
        <h3> {contents} </h3>
        <p>작성자 : {username}</p>
        <button className="delete" onClick={() => onRemove(id)}>
          삭제
        </button>
        <button className="move" onClick={() => onMove(id)}>
          이동
        </button>
      </div>
    );
  }
}

function TodoList({ lists, onRemove, onMove }) {
  return (
    <div className="Lists">
      <div className="Type" id="TODO">
        <h2>TODO</h2>
        {lists.map(
          (list, index) =>
            list.type === "TODO" && (
              <Lists
                list={list}
                onRemove={onRemove}
                onMove={onMove}
                key={index}
              />
            )
        )}
      </div>
      <div className="Type" id="DOING">
        <h2>DOING</h2>
        {lists.map(
          (list, index) =>
            list.type === "DOING" && (
              <Lists
                list={list}
                onRemove={onRemove}
                onMove={onMove}
                key={index}
              />
            )
        )}
      </div>
      <div className="Type" id="DONE">
        <h2>DONE</h2>
        {lists.map(
          (list, index) =>
            list.type === "DONE" && (
              <Lists list={list} onRemove={onRemove} key={index} />
            )
        )}
      </div>
    </div>
  );
}

export default TodoList;
