import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "../redux/columns/columnsActions";
import { setSearchTerm } from "../redux/searchTerm/searchTermActions";

const Filter1 = ({ item }) => {
  const allApps = useSelector((state) => state.allApps.allApps.data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const allAppsToShow = allApps.filter((item) =>
    item.app_name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = () => {
    const searchId = allApps.find((item) =>
      item.app_name.toLowerCase().includes(search.toLowerCase())
    ).app_id;
    dispatch(setSearchTerm(searchId));
    dispatch(toggleFilter(item.title));
  };

  return (
    <>
      <div
        className=" fixed top-0 bottom-0 left-0 right-0"
        style={{ backgroundColor: "rgba(255,255,255, 0.6)", zIndex: 1 }}
      ></div>
      <div className="relative" style={{ zIndex: 100 }}>
        <div
          className="absolute bg-white border-2 border-gray-200 rounded-md left-4 px-2 1111111 "
          style={{
            width: 300,
          }}
        >
          <h1 className="text-left">Search Apps</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSubmit={handleClick}
              className="border-2 border-gray-200 rounded-md px-2 my-2"
              style={{ width: 250 }}
            />
          </div>
          <div className="px-4">
            {allAppsToShow.map((item, index) => {
              return (
                <div>
                  <button
                    key={index}
                    className="mb-1"
                    onClick={() => setSearch(item.app_name)}
                  >
                    <p className="font-bold">{item.app_name}</p>
                    <p className="-mt-2 text-sm">{item.app_id}</p>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-700 my-2 text-white px-4 rounded-md"
              onClick={handleClick}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter1;
