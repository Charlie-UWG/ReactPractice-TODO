import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="inputArea">
        <input placeholder="TODO" type="text" />
        <button>追加</button>
      </div>
      <div className="incompleteArea">
        <p className="title">未完了のTODO</p>
        <div>
          <ul className="listRow">
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
        <div>
          <ul className="listRow">
            <li>いいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
      </div>
      <div className="completeArea">
        <p className="title">完了したTODO</p>
        <div>
          <ul className="listRow">
            <li>うううううう</li>
            <button>戻す</button>
          </ul>
        </div>
      </div>
    </>
  );
};
