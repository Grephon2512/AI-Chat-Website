import React from "react";
import brackets from "../assets/svg/Brackets";

const Tagline = ({ children, classname }) => {
  return (
    <div className={`tagline flex items-center ${classname || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
