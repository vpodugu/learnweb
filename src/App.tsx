import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import { NavBar } from "./styles/NavBar";

function App() {
  return (
    <Router>
      <NavBar>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/dashboard">Dashboard</Link>
      </NavBar>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
