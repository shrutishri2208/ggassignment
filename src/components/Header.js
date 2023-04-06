import React from "react";
import Date from "./Date";
import Settings from "./Settings";

const Header = () => {
  return (
    <div className="flex justify-between">
      <Date />
      <Settings />
    </div>
  );
};

export default Header;
