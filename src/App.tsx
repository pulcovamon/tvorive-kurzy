import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Info from "./pages/Info";
import Contacts from "./pages/Contacts";

const AppContent: React.FC = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setNavbarVisible(false);
    }
  }, [location.pathname, isDesktop]);

  const displayNavbar = () => {
    setNavbarVisible(true);
  };

  const closeNavbar = () => {
    setNavbarVisible(false);
  };

  const navbar = navbarVisible || isDesktop ? <Navbar closeNavbar={closeNavbar} /> : null;

  return (
    <div className="app-container">
      <img src="palette1.png" className="background-palette" />
      <img src="brush.png" className="background-palette2" />
      <Header displayNavbar={displayNavbar} />
      {navbar}
      <img className="navbar-img" src="logo.png" alt="Tvorive kurzy Eva" width={250} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/kurzy" element={<Courses />} />
          <Route path="/kontakty" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router basename="/tvorive-kurzy">
      <AppContent />
    </Router>
  );
};

export default App;
