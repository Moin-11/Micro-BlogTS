// Web Form to create a new blog post

import { useState } from "react";
import { Blog } from "../components/blog/blog";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("Moin11.dev");
  const [isPending, setIsPending] = useState<boolean>(false);
  const history = useHistory();

  const addBlog = (e: any): void => {
    e.preventDefault();

    const bId: number = parseInt((((Math.random() * 100) % 10) + 2).toString());
    const blog: Blog = { title: title, body: body, author: author, id: bId };

    setIsPending(true);

    fetch(
      "https://my-json-server.typicode.com/Moin-11/json-server-microBlog-TS/blogs",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }
    );

    setIsPending(false);
    history.go(-1);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={addBlog}>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />

        <label>Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e: any) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <select
          value={author}
          onChange={(e: any) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Moin11.dev">Moin11.dev</option>
          <option value="Jeff Cavaliere From Athleanx.com">
            Jeff Cavaliere From Athleanx.com
          </option>
          <option value="NetNinja">NetNinja</option>
        </select>
        {isPending === true ? (
          <button disabled style={{ background: "green" }}>
            Adding Blog
          </button>
        ) : (
          <button>Add Blog</button>
        )}

        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
