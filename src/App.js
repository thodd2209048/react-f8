import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];
function App() {
  const [checked, setChecked] = useState([]);
  const handleCheck = (id) => {
    const isChecked = checked.includes(id);
    if (isChecked) {
      setChecked(checked.filter((item) => item !== id));
    } else {
      setChecked([...checked, id]);
    }
  };
  const handleSubmit = () => {
    console.log(checked);
  };
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            onChange={() => {
              handleCheck(course.id);
            }}
            checked={checked.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
