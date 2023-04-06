import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [startDate, setStartDate] = useState(new window.Date("07-01-2021"));
  const [endDate, setEndDate] = useState(new window.Date("07-31-2021"));

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div>
      <div className="flex border-gray-300 border-2">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          minDate={new window.Date("07-01-2021")}
          maxDate={new window.Date("07-31-2021")}
          className=""
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
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
