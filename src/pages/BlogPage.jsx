/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";
import { posts } from "../data/postsData";

function BlogPage() {
  function BlogLink({ post }) {
    return (
      <li>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </li>
    );
  }

  return (
    <>
      <h1>BlogPage</h1>

      <ul>
        {posts.map((post, index) => (
          <BlogLink key={index} post={post} />
        ))}
      </ul>

      <hr />

      <Outlet />
    </>
  );
}

export { BlogPage };
