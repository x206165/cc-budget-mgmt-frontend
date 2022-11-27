import React from "react";
import axios from "axios";


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function TestAxios() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <header className="App-header">
        <p>TITULO PROVISIONAL</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </header>
    </div>
  );
}


