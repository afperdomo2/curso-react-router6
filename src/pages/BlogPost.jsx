import { Link, useParams } from "react-router-dom";
import { posts } from "../data/postsData";

function BlogPost() {
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  return (
    <>
      <Link to="/blog">⬅️ Back</Link>

      <h2>{post.title}</h2>
      <span>✒️{post.author}</span>
      <p>{post.content}</p>
    </>
  );
}

export { BlogPost };
