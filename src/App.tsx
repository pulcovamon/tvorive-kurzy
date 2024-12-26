import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";

// Definice jednotlivých stránek

const Info = () => <div><h2>Info</h2><p>Tato stránka obsahuje informace.</p></div>;
const Courses = () => <div><h2>Kurzy</h2><p>Seznam nabízených kurzů.</p></div>;
const Contacts = () => <div><h2>Kontakty</h2><p>Kontaktní údaje.</p></div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <img src="background-palette.webp" className="background-palette"/>
        <Header />
        <Navbar />
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
    </Router>
  );
};

export default App;
