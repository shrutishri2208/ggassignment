import React, { useEffect } from "react";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";
import { useDispatch } from "react-redux";
import { setFilterName } from "../redux/filter/filterActions";

const Filter = ({ item }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFilterName(item.accessor));
  }, []);
  return (
    <div>
      {item.title === "App" ? <Filter1 item={item} /> : <Filter2 item={item} />}
    </div>
  );
};

export default Filter;
