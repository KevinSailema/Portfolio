import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
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
  const [language, setLanguage] = useState("en");

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
        <Navbar language={language} setLanguage={setLanguage} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/project" element={<Projects language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/resume" element={<Resume language={language} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
