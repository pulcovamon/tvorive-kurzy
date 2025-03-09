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
import Footer from "./components/Footer";

const images = [
  "469081208_122168847446249789_5586547136073549947_n.jpg",
  "469087949_122168847656249789_1229563101964536289_n.jpg",
  "469089958_122169044972249789_4051613390176550732_n.jpg",
  "469121031_122168847392249789_228136787837621275_n.jpg",
  "469124228_122168847416249789_529083761992409823_n.jpg",
  "469130843_122168847410249789_6458794863008195022_n.jpg",
  "469163912_122168847398249789_565327365816039447_n.jpg",
  "469176748_122168847386249789_6166407068095635099_n.jpg",
  "469180886_122168847374249789_6529274338169913467_n.jpg",
  "469181741_122168847578249789_1928072034286469386_n.jpg",
  "469182960_122169044864249789_1392439034712960945_n.jpg",
  "469208140_122168847464249789_5005832497987227905_n.jpg",
  "469222243_122168847404249789_7256726528005602055_n.jpg",
  "469284172_122168847440249789_3063773670360851138_n.jpg",
];

const AppContent: React.FC = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const location = useLocation();

  const emailAddress = "tvorive.kurzy.eva@gmail.com";

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

      <Header displayNavbar={displayNavbar} />
      {navbar}

      <div className="wrapper">
      <div className="content">
        <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/kontakty" element={<Contacts isDesktop={isDesktop} />} />
          <Route path="/o-mne" element={<AboutMe />} />
          <Route path="/galerie" element={<Gallery images={images} />} />
        </Routes>
        </div>
      </div>

      <Footer emailAddress={emailAddress} />
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
