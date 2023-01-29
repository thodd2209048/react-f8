import { useCallback, useMemo, useReducer, useRef, useState } from "react";
import Content from "./Content";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const inputRef = useRef();
  const handleAdd = () => {
    setTodos([...todos, todo]);
    setTodo("");
    inputRef.current.focus();
  };

  const removeTodo = (idx) => {
    setTodos(() => {
      const tempTodos = [...todos];
      tempTodos.splice(idx, 1);
      return tempTodos;
    });
  };
  console.log(todos);
  return (
    <div style={{ padding: "10px 32px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        //&times;
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}{" "}
            <span
              onClick={() => {
                removeTodo(idx);
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
