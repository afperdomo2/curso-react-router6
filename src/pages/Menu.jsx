import { NavLink } from "react-router-dom";

function Menu() {
  const ROUTES = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/profile", label: "Profile" },
  ];

  return (
    <nav>
      <ul>
        {ROUTES.map((route, index) => (
          <li key={index}>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };
