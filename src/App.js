import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "./components/Container";

function App() {
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

  return (
    <div className="App">
      <div className="flex">
        <div className="bg-blue-950 p-8"></div>
        <div className="m-10 w-full">
          <h1 className="text-xl font-semibold"> Analytics</h1>
          <div className="flex border-gray-300 border-2 w-2/3 p-1 ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
              selectsStart
              minDate={new window.Date("07-01-2021")}
              maxDate={new window.Date("07-31-2021")}
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
          <Container startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
}

export default App;
