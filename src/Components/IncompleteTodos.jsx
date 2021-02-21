import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComp } = props;

  return (
    <div className="incompleteArea">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="listRow">
              <li>{todo}</li>
              <button onClick={() => onClickComp(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
