import React from 'react';
import { actions, useStore } from './store';

ContextAndReducerApp.propTypes = {};

function ContextAndReducerApp(props) {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
  };
  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </div>
  );
}

export default ContextAndReducerApp;
