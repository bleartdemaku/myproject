import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "../src/pages/Home/Home";
import Services from "../src/pages/Services/Services";
import Team from "../src/pages/Team/Team";
import Contact from "../src/pages/Contact/Contact";
import About from "../src/pages/About/About";
import NoPage from "../src/pages/NoPage/NoPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
