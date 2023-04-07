import React from "react";
import Date from "./Date";
import Settings from "./Settings";
import TuneIcon from "@mui/icons-material/Tune";

const Header = ({ isSettings, setIsSettings }) => {
  return (
    <div className="flex justify-between mt-8">
      <Date />
      <button
        onClick={() => setIsSettings(!isSettings)}
        className="border-gray-200 rounded-md border-2 px-4 font-semibold text-gray-700"
      >
        <TuneIcon className="mr-2 text-blue-700" />
        Settings
      </button>
    </div>
  );
};

export default Header;
