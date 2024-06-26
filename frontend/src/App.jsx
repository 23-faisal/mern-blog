import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import WritePage from "./pages/Write/WritePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import PostDetailsPage from "./pages/PostDetails/PostDetailsPage";
import PageNotFoundPage from "./pages/PageNotFound/PageNotFoundPage";
import EditPostPage from "./pages/EditPost/EditPostPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/edit/:id" element={<EditPostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/posts/post/:id" element={<PostDetailsPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
