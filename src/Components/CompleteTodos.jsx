import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="completeArea">
      <p className="title">完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="listRow">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
