import { useState } from "react";

import { useAuth } from "../security/useAuth";
import { Navigate } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();

  const [username, setUsername] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={onLogin}>
        <input
          type="text"
          placeholder="Nombre usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export { LoginPage };
