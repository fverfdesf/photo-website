import React from "react";
import load from "../images/1.gif";

const Loading = ({ isLoad }) => {
  return (
    <div className="load">
      <div className="load-block">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Loading;
