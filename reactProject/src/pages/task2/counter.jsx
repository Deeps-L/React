import React, { useState, useEffect } from "react";

const TaskTwo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      {/* <p>Count: {count}</p> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <label> Result</label>
        <input type="text" value={count} />
      </div>
    </div>
  );
};
export default TaskTwo;
