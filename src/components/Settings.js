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
    <div className="mt-2 border-2 border-gray-300 py-4 px-6">
      <h1>Dimensions and Metrics</h1>
      <div className="flex gap-x-16 flex-wrap">
        {columns.map((item) => {
          return (
            <div className="flex gap-x-2" key={item.id}>
              {item.visibility && <h1>YES</h1>}
              <button
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
