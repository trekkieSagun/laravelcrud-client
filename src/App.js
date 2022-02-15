import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
