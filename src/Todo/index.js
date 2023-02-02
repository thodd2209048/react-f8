import { useReducer, useRef} from "react";
import { addJob, deleteJob, setJob } from "./action";
import reducer, { initState } from "./reducer";


//dispatch

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0px 32px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, idx) => (
          <li key={idx}>
            {job} <span onClick={() => dispatch(deleteJob(idx))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
