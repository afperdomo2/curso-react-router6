import { HashRouter, Route, Routes } from "react-router-dom";

import { BlogPage } from "./pages/BlogPage";
import { BlogPost } from "./pages/BlogPost";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import { Menu } from "./pages/Menu";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthProvider } from "./security/AuthProvider";
import { AuthRoute } from "./security/AuthRoute";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/logout"
            element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            }
          />

          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
