import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, SetShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      SetShowGoToTop(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setType(tab);
          }}
          style={
            type === tab ? { color: "white", backgroundColor: "brown" } : {}
          }
        >
          {tab}
        </button>
      ))}

      {posts.map((post) => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}

      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to top
        </button>
      )}
    </div>
  );
}

export default Content;
