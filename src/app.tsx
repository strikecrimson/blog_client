import React, { useState, useEffect } from "react";
import styles from "./app.module.less";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const addCount = (nowCount: number) => {
    setCount(nowCount + 1);
  };

  return (
    <>
      <div className={styles.title}>this is a react app</div>
      <p>now count is {count}</p>
      <button
        onClick={() => {
          addCount(count);
        }}>
        增加Count
      </button>
    </>
  );
};

export default App;
