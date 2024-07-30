import { Link, useNavigate, useParams } from "react-router-dom";

import { posts } from "../data/postsData";
import { useAuth } from "../security/useAuth";

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();

  const post = posts.find((post) => post.slug === slug);

  const returnToBlog = () => {
    navigate(-1); // Se devuelve a la página anterior
  };

  const isTheAuthor = post.author === auth.user?.username;

  return (
    <>
      <button onClick={returnToBlog}>⬅️ Back</button>

      <Link to="/blog">⬅️ Back</Link>

      <h2>Post: {post.title}</h2>
      <small>Creado por: ✒️{post.author}</small>
      <p>{post.content}</p>

      {(auth.user?.isAdmin || isTheAuthor) && <button>Eliminar post</button>}
    </>
  );
}

export { BlogPost };
