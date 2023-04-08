import React from "react";
import Date from "./Date";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  setFilterName,
  setapp,
  setrequests,
  setresponses,
  setimpressions,
  setclicks,
  setrevenue,
} from "../redux/filter/filterActions";

const Header = ({ isSettings, setIsSettings }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between mt-8">
      <Date />
      <div>
        <button
          onClick={() => {
            dispatch(setFilterName(null));
            dispatch(setapp(""));
            dispatch(setrequests(10000000));
            dispatch(setresponses(10000000));
            dispatch(setimpressions(10000000));
            dispatch(setclicks(10000000));
            dispatch(setrevenue(10000000));
          }}
          className="border-gray-200 rounded-md border-2 px-4 font-semibold text-gray-700"
        >
          <CloseIcon className="mr-2 text-blue-700" />
          Clear Filters
        </button>
        <button
          onClick={() => setIsSettings(!isSettings)}
          className="border-gray-200 rounded-md border-2 px-4 font-semibold text-gray-700"
        >
          <TuneIcon className="mr-2 text-blue-700" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Header;
