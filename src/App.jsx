import React from "react";
import "./style.css";

export const App = () => {
  return (
    <>
      <div className="inputArea">
        <input placeholder="TODO" type="text" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <div>
          <ul>
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
        <div>
          <ul>
            <li>いいいいいい</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
      </div>
      <div>
        <p>完了したTODO</p>
        <div>
          <ul>
            <li>うううううう</li>
            <button>戻す</button>
          </ul>
        </div>
      </div>
    </>
  );
};
