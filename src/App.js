import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

import "./style/css/App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
