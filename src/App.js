import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Work from "./components/About/Work";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Hobbies from "./components/Hobbies/Hobbies";
import Skills from "./components/Skills/Skills";
import Particle from "./components/Particle";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Particle />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/Portfolio"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
