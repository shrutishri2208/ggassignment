import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleState } from "../redux/columns/columnsActions";

const Settings = () => {
  const columns = useSelector((state) => state.columns.columns);
  const dispatch = useDispatch();

  columns.sort((a, b) => {
    return a.id - b.id;
  });
  return (
    <div className="mt-2 border-2 border-gray-200 py-4 px-6 rounded-md">
      <h1 className="font-semibold text-gray-700 mb-2">
        Dimensions and Metrics
      </h1>
      <div className="flex gap-x-4 flex-wrap">
        {columns.map((item) => {
          return (
            <div className="flex" key={item.id} draggable>
              <div className="bg-blue-700"></div>
              <button
                className={`text-left mb-2 p-2 rounded-md border-2 border-gray-200  ${
                  (item.visibility ||
                    item.title === "Date" ||
                    item.title === "App") &&
                  "border-l-8 border-l-blue-700"
                }`}
                style={{
                  width: 200,
                }}
                onClick={() => {
                  dispatch(toggleState(item.title));
                }}
              >
                {item.title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
