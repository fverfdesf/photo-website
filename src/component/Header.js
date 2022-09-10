import React from "react";
import Search from "../component/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li className="search">
          <Search />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
