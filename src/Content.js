import { useEffect, useState } from "react";
const lessons = [
  { id: 1, name: "ReactJs" },
  { id: 2, name: "SPA" },
  { id: 3, name: "Arrow function" },
];
function Content() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = (e) => {
      console.log(e);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#ccc" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
