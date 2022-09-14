import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
