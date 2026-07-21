import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BloggerProfile from "./pages/BloggerProfile";
import BloggersPage from "./pages/BloggersPage";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import SMM from "./pages/Smm";
import AddBlogger from "./pages/AddBlogger";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/bloggers"
          element={<BloggersPage />}
        />

        <Route
          path="/blogger/:id"
          element={<BloggerProfile />}
        />
        <Route
          path="/smm"
          element={<SMM />}
        />
        <Route
          path="/add-blogger"
          element={<AddBlogger />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;