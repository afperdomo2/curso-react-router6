import { HashRouter, Route, Routes } from "react-router-dom";

import { BlogPage } from "./pages/BlogPage";
import { HomePage } from "./pages/HomePage";
import { Menu } from "./pages/Menu";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return (
    <HashRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
