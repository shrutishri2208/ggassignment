import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "../redux/columns/columnsActions";
import {
  setapp,
  setrequests,
  setresponses,
  setimpressions,
  setclicks,
  setrevenue,
  setFilterName,
} from "../redux/filter/filterActions";

import { Slider } from "@mui/material";

const Filter2 = ({ item }) => {
  const allData = useSelector((state) => state.data.allData);
  const filterName = useSelector((state) => state.filter.filterName);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleClick = () => {
    switch (item.accessor) {
      case "requests":
        dispatch(setrequests(value));
        break;
      case "responses":
        dispatch(setresponses(value));
        break;
      case "impressions":
        dispatch(setimpressions(value));
        break;
      case "clicks":
        dispatch(setclicks(value));
        break;
      case "revenue":
        dispatch(setrevenue(value));
        break;
      default:
        break;
    }
    dispatch(setFilterName(item.accessor));
    dispatch(toggleFilter(item.title));
  };

  const resetValues = () => {
    switch (item.accessor) {
      case "requests":
        dispatch(setrequests(10000000));
        break;
      case "responses":
        dispatch(setresponses(10000000));
        break;
      case "impressions":
        dispatch(setimpressions(10000000));
        break;
      case "clicks":
        dispatch(setclicks(10000000));
        break;
      case "revenue":
        dispatch(setrevenue(10000000));
        break;
      default:
        break;
    }
  };

  const divRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        dispatch(toggleFilter(item.title));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  let access = item.accessor;

  let valuesArray = allData.map((data) => data[access]);

  let minValue = null;
  let maxValue = null;

  if (filterName === "fillRate" || filterName === "CTR") {
    minValue = 0;
    maxValue = 100;
  } else if (filterName === "revenue") {
    minValue = 0;
    maxValue = Math.max(...valuesArray).toFixed(2);
  } else {
    minValue = 0;
    maxValue = Math.max(...valuesArray);
  }

  return (
    <>
      <div
        className=" fixed top-0 bottom-0 left-0 right-0"
        style={{ backgroundColor: "rgba(255,255,255, 0.6)", zIndex: 1 }}
      ></div>
      <div className="relative" style={{ zIndex: 100 }} ref={divRef}>
        <div
          className={`absolute bg-white border-2 border-gray-200 rounded-md  px-2 ${
            item.accessor === "fillRate" || item.accessor === "CTR"
              ? "right-20"
              : "left-4"
          }  `}
          style={{
            width: 300,
          }}
        >
          <div>
            <Slider
              value={value}
              size="small"
              min={minValue}
              max={maxValue}
              valueLabelDisplay="on"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div className="flex justify-between -mt-4">
              <p className="text-sm">{minValue}</p>
              <p className="text-sm">{maxValue}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <button onClick={resetValues}>Reset</button>
              <button
                className="bg-blue-700 my-2 text-white px-4 rounded-md"
                onClick={handleClick}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter2;
