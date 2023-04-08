import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "../redux/columns/columnsActions";
import { setSearchValue } from "../redux/filter/filterActions";
import { setFilterName } from "../redux/filter/filterActions";

import { Slider } from "@mui/material";

const Filter2 = ({ item }) => {
  // {id: 4, title: 'Ad Response', accessor: 'responses', visibility: true, isFilter: true}
  const allData = useSelector((state) => state.data.allData);
  const filterName = useSelector((state) => state.filter.filterName);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleSliderChange = () => {
    dispatch(setSearchValue(value));
    dispatch(toggleFilter(item.title));
  };

  useEffect(() => {
    dispatch(setFilterName(item.accessor));
  }, []);

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
  console.log(item);
  //   const minValue = 0;
  //   const maxValue = 100;
  console.log("FILTERNAME", filterName);
  let valuesArray = allData.map((data) => data[filterName]);
  console.log("VALUESARRAY", Math.max(...valuesArray));

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
          className="absolute bg-white border-2 border-gray-200 rounded-md left-4 px-2 1111111 "
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
              <button>Reset</button>
              <button
                className="bg-blue-700 my-2 text-white px-4 rounded-md"
                onClick={handleSliderChange}
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
