import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Footer from "./common/Footer";
import Loader from "./common/loader";
import "./App.css";
import Cursor from "./common/cursor";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  return (
    <Router>
      <main>
        <Loader setLoading={setLoading} /> 
        <Cursor />
        <Navbar loading={loading} />
        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route path="/about" element={<About loading={loading} />} />
          <Route path="/projects" element={<Projects loading={loading} />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
