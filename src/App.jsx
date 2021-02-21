import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 表示要素を useState で設定
  const [todoText, setTodoText] = useState([""]);
  const [inCompleteTodos, setInCompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["うううう"]);
  // TODOテキスト入力関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンの関数
  const onClickAdd = () => {
    if (todoText === "") return; //空の時に追加しない
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText(""); // 追加ボタン押したあとに表示をリセット
  };
  // 削除ボタンの関数
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]]; //配列のindex番目のデータを取り出す
    setInCompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...inCompleteTodos, completeTodos[index]];

    setcompleteTodos(newCompleteTodos);
    setInCompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="inputArea">
        <input
          placeholder="TODO"
          type="text"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incompleteArea">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
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
    </>
  );
};
