import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={
            type === tab ? { color: "white", backgroundColor: "brown" } : {}
          }
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
