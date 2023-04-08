import React from "react";
import Filter1 from "./Filter1";
import Filter2 from "./Filter2";

const Filter = ({ item }) => {
  return (
    <div>
      {item.title === "App" ? <Filter1 item={item} /> : <Filter2 item={item} />}
    </div>
  );
};

export default Filter;
