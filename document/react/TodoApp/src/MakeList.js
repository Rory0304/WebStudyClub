import React from "react";

function MakeList({ username, contents, onChange, onCreate }) {
  return (
    <div className="inputField">
      <input
        placeholder="작성자"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        placeholder="내용 등록"
        name="contents"
        value={contents}
        onChange={onChange}
      />
      <label>
        <input type="radio" name="type" value="TODO" onChange={onChange} />
        TODO
      </label>
      <label>
        <input type="radio" name="type" value="DOING" onChange={onChange} />
        DOING
      </label>
      <label>
        <input type="radio" name="type" value="DONE" onChange={onChange} />
        DONE
      </label>
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default MakeList;
