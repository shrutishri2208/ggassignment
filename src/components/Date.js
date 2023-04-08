import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { setStartDate } from "../redux/dates/datesActions";
import { setEndDate } from "../redux/dates/datesActions";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Date = () => {
  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex border-gray-200 border-2 p-2 mb-1 rounded-md">
        <h1 className="mr-2">From:</h1>
        <CalendarMonthIcon className="mr-1 text-blue-700" />
        <DatePicker
          selected={startDate}
          onChange={(date) => dispatch(setStartDate(date))}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          minDate={new window.Date("06-01-2021")}
          maxDate={new window.Date("06-30-2021")}
        />
        <h1 className="mr-2">To:</h1>
        <CalendarMonthIcon className="mr-1 text-blue-700" />

        <DatePicker
          selected={endDate}
          onChange={(date) => dispatch(setEndDate(date))}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          maxDate={new window.Date("06-30-2021")}
          className=""
        />
      </div>
    </div>
  );
};

export default Date;
