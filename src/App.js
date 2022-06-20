import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp.js";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
