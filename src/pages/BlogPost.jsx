import { Link, useNavigate, useParams } from "react-router-dom";
import { posts } from "../data/postsData";

function BlogPost() {
  const navigate = useNavigate();

  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate(-1); // Se devuelve a la página anterior
  };

  return (
    <>
      <button onClick={returnToBlog}>⬅️ Back</button>

      <Link to="/blog">⬅️ Back</Link>

      <h2>{post.title}</h2>
      <span>✒️{post.author}</span>
      <p>{post.content}</p>
    </>
  );
}

export { BlogPost };
