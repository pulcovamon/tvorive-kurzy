import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Contacts from "./pages/Contacts";
import AboutMe from "./pages/AboutMe";
import Gallery from "./pages/Gallery";

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

  const navbar =
    navbarVisible || isDesktop ? (
      <Navbar closeNavbar={closeNavbar} location={location.pathname} />
    ) : null;

  return (
    <div className="app-container">
      <img
        src="palette2.png"
        className="background-palette"
      />
      <img
        src="brush.png"
        className="background-palette2"
      />
      <Header displayNavbar={displayNavbar} />
      {navbar}
      <img
        className="navbar-img"
        src="logo.png"
        alt="Tvorive kurzy Eva"
        width={250}
      />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/kurz" element={<Info />} />
          <Route path="/kontakty" element={<Contacts isDesktop={isDesktop} />} />
          <Route path="/info/o-me" element={<AboutMe />} />
          <Route path="/galerie" element={<Gallery />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
