import React from "react";
import { useForm } from "react-hook-form";

function MakeList({ username, contents, onChange, onCreate }) {
  const { register, handleSubmit } = useForm();

  return (
    <form className="inputField" onSubmit={handleSubmit(onCreate)}>
      작성자 :
      <input
        placeholder="작성자"
        name="username"
        value={username}
        onChange={onChange}
        ref={register({ required: true })}
      />
      내용 :
      <input
        placeholder="내용 등록"
        name="contents"
        value={contents}
        onChange={onChange}
        ref={register({ required: true })}
      />
      <label>
        <input
          type="radio"
          name="type"
          value="TODO"
          onChange={onChange}
          ref={register({ required: true })}
        />
        TODO
      </label>
      <label>
        <input
          type="radio"
          name="type"
          value="DOING"
          onChange={onChange}
          ref={register({ required: true })}
        />
        DOING
      </label>
      <label>
        <input
          type="radio"
          name="type"
          value="DONE"
          onChange={onChange}
          ref={register({ required: true })}
        />
        DONE
      </label>
      {/* <button onClick={onCreate}>등록</button> */}
      <input type="submit" value="등록" />
    </form>
  );
}

export default MakeList;
