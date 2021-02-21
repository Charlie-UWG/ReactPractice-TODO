import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./Components/InputTodo";
import { IncompleteTodos } from "./Components/IncompleteTodos";
import { CompleteTodos } from "./Components/CompleteTodos";

export const App = () => {
  // 表示要素を useState で設定
  const [todoText, setTodoText] = useState([""]);
  const [inCompleteTodos, setInCompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={inCompleteTodos}
        onClickDelete={onClickDelete}
        onClickComp={onClickComp}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
