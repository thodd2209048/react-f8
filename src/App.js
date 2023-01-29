import { useCallback, useMemo, useReducer, useRef, useState } from "react";
import Content from "./Content";
const initState = 0;
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid action");
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div style={{ padding: "10px 32px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}
export default App;
