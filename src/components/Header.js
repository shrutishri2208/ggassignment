import React from "react";
import Date from "./Date";
import Settings from "./Settings";

const Header = ({ isSettings, setIsSettings }) => {
  return (
    <div className="flex justify-between">
      <Date />
      <button onClick={() => setIsSettings(!isSettings)}>Settings</button>
    </div>
  );
};

export default Header;
