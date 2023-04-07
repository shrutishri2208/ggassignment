import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { setStartDate } from "../redux/dates/datesActions";
import { setEndDate } from "../redux/dates/datesActions";

const Date = () => {
  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex border-gray-300 border-2 p-1 ">
        <DatePicker
          selected={startDate}
          onChange={(date) => dispatch(setStartDate(date))}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          minDate={new window.Date("07-01-2021")}
          maxDate={new window.Date("07-31-2021")}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => dispatch(setEndDate(date))}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={new window.Date("07-31-2021")}
          className=""
        />
      </div>
    </div>
  );
};

export default Date;
