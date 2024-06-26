import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import WritePage from "./pages/Write/WritePage";
import ProfilePage from "./pages/Profile/ProfilePage";

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
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
