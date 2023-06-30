import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/HomePage/Home.jsx";
import About from "pages/AboutPage/About";
import Detail from "pages/DetailPage/Detail";
import Navigation from "components/Navigation";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
