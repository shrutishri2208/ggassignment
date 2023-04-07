import React, { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector, useDispatch } from "react-redux";
import { fetchApps } from "../redux/allApps/allAppsActions";

const Container = () => {
  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);

  const allApps = useSelector((state) => state.allApps.allApps);

  const dispatch = useDispatch();

  const getDate = (date) => {
    return [
      date.getFullYear(),
      "0" + (date.getMonth() + 1),
      date.getDate() < 9 ? "0" + date.getDate() : date.getDate(),
    ].join("-");
  };

  const URL =
    "http://go-dev.greedygame.com/v3/dummy/report?startDate=" +
    getDate(startDate) +
    "&endDate=" +
    getDate(endDate);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  useEffect(() => {
    dispatch(fetchApps());
  }, []);

  return (
    <div className="" style={{ minHeight: window.innerHeight }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="bg-red-200 w-full">
          <thead>
            <tr>
              <th className="text-left max-w-fit">
                <FilterAltIcon />
              </th>
            </tr>
            <tr className="text-left">
              <th className="">Date</th>
              <th>App</th>
              <th>Requests</th>
              <th>Responses</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Revenue</th>
              <th>Fill rate</th>
              <th>CTR</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              function formatDate(date) {
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

                var ds = new Date(date);
                return [
                  ds.getDate(),
                  monthNames[ds.getMonth()],
                  ds.getFullYear(),
                ].join(" ");
              }

              var date = formatDate(item.date);
              const fillRate = (item.requests / item.responses) * 100;
              const ctr = (item.clicks / item.impressions) * 100;
              const appName = allApps.data.filter(
                (app) => app.app_id === item.app_id
              )[0].app_name;
              return (
                <tr key={index} className="text-left">
                  <td>{date}</td>
                  <td>{appName}</td>
                  <td>{item.requests}</td>
                  <td>{item.responses}</td>
                  <td>{item.impressions}</td>
                  <td>{item.clicks}</td>
                  <td>${String(item.revenue).substring(0, 5)}</td>
                  <td>{String(fillRate).substring(0, 5)}%</td>
                  <td>{String(ctr).substring(0, 5)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Container;
