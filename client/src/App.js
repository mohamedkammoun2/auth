import logo from "./logo.svg";
import "./App.css";
import SingUp from "./Components/SingUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Profil from "./Components/Profie";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profil" element={<Profil/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
