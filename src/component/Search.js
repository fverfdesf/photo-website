import React, { useState } from "react";
import Loading from "./Loading";
const Search = ({ searchPhoto }) => {
  const [input, setInput] = useState("cake");
  const auth = "563492ad6f91700001000001fe9322438aca41cda25d5b1099dbc32c";
  const photoURL =
    "https://api.pexels.com/v1/search?query=" + input + "&per_page=15";

  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={searchPhoto(photoURL, auth)}>search</button>
    </div>
  );
};
export default Search;
