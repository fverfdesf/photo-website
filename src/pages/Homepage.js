import React, { useState, useEffect } from "react";
import Loading from "../component/Loading";
const Homepage = ({ searchData, setSearchData }) => {
  const auth = "563492ad6f91700001000001fe9322438aca41cda25d5b1099dbc32c";
  const photoURL = "https://api.pexels.com/v1/curated?per_page=15";
  const { data, isLoad } = searchData;

  useEffect(() => {
    getPhoto(photoURL, auth);
  }, []);

  async function getPhoto(url, auth) {
    setSearchData({ isLoad: true });
    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
    });
    const dataPhoto = await res.json();
    setSearchData({ isLoad: false });
    setSearchData({ ...searchData, dataPhoto });
    console.log(searchData);
  }

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {isLoad ? <Loading /> : ""}

      <div className="photo">{}</div>
    </div>
  );
};
export default Homepage;
