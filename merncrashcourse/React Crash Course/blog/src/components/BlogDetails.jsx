import React, { useState } from "react";
import "../index.css"
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    setIsPending(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete} disabled={isPending}>
            {isPending ? "deleting blog" : "delete"}
          </button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
