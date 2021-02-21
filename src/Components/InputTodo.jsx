import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="inputArea">
      <input
        placeholder="TODO"
        type="text"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
