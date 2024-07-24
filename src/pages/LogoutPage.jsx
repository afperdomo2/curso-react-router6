import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/useAuth";

function LogoutPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  const returnToBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>Estás seguro de que quieres salir?</label>

        <button type="submit">Si, salir</button>

        <button type="button" onClick={returnToBack}>
          Cancelar
        </button>
      </form>
    </>
  );
}

export { LogoutPage };
