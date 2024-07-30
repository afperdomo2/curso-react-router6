/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const adminList = ["admin", "pedro", "joshua"];

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.includes(username);
    setUser({ username, isAdmin });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
