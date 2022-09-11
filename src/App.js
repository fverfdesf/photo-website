import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

import "./style/css/App.css";

const App = () => {
  const [searchData, setSearchData] = useState({ isLoad: false });

  function searchPhoto(url, auth) {
    return async function (e) {
      setSearchData({ isLoad: true });
      let res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json", Authorization: auth },
      });
      let data = await res.json();
      setSearchData({ isLoad: false });
      setSearchData({ ...searchData, data });
    };
  }

  return (
    <div className="App">
      <Header searchPhoto={searchPhoto} />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage searchData={searchData} setSearchData={setSearchData} />
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
