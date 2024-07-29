import { NavLink } from "react-router-dom";

import { useAuth } from "../security/useAuth";

function Menu() {
  const ROUTES = [
    { to: "/", label: "Home", isPrivate: false },
    { to: "/blog", label: "Blog", isPrivate: false },
    { to: "/profile", label: "Profile", isPrivate: true },
    { to: "/login", label: "Login", isPrivate: false, isPublicOnly: true },
    { to: "/logout", label: "Logout", isPrivate: true },
  ];

  const auth = useAuth();

  return (
    <nav>
      <ul>
        {ROUTES.map((route, index) => {
          if (route.isPublicOnly && auth.user) {
            return null;
          }
          if (route.isPrivate && !auth.user) {
            return null;
          }
          return (
            <li key={index}>
              <NavLink
                to={route.to}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
              >
                {route.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Menu };
