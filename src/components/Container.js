import React, { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector, useDispatch } from "react-redux";
import { fetchApps } from "../redux/allApps/allAppsActions";

const Container = () => {
  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);

  const allApps = useSelector((state) => state.allApps.allApps);
  const appLoading = useSelector((state) => state.allApps.loading);

  const columns = useSelector((state) => state.columns.columns);

  var activeColumns = [];
  columns.forEach((item) => item.visibility && activeColumns.push(item.title));

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

  useEffect(() => {
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    dispatch(fetchApps());
  }, []);

  return (
    <div className="p-4 mt-4" style={{ minHeight: window.innerHeight }}>
      <table className="w-full" style={{ lineHeight: 2 }}>
        <thead className="">
          <tr className="">
            {columns.map((item, index) => {
              if (
                item.visibility ||
                item.title === "Date" ||
                item.title === "App"
              )
                return (
                  <td className="text-left max-w-fit text-gray-500" key={index}>
                    <FilterAltIcon />
                  </td>
                );
              else return "";
            })}
          </tr>
          <tr className="text-left tr-border">
            {columns.map((item) => {
              if (
                item.visibility ||
                item.title === "Date" ||
                item.title === "App"
              )
                return (
                  <th key={item.id} className="text-gray-600 mb-4">
                    {item.title}
                  </th>
                );
              else return "";
            })}
          </tr>
        </thead>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
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

              const fillRate = (item.requests / item.responses) * 100;
              const ctr = (item.clicks / item.impressions) * 100;
              const appName =
                !appLoading &&
                allApps.data.filter((app) => app.app_id === item.app_id)[0]
                  .app_name;

              return (
                <tr key={index} className="text-left tr-border">
                  <td>{formatDate(item.date)}</td>
                  <td>{appName}</td>
                  {activeColumns.includes("Ad Requests") && (
                    <td>{item.requests.toLocaleString("en-US")}</td>
                  )}
                  {activeColumns.includes("Ad Response") && (
                    <td>{item.responses.toLocaleString("en-US")}</td>
                  )}
                  {activeColumns.includes("Impression") && (
                    <td>{item.impressions.toLocaleString("en-US")}</td>
                  )}
                  {activeColumns.includes("Clicks") && (
                    <td>{item.clicks.toLocaleString("en-US")}</td>
                  )}
                  {activeColumns.includes("Revenue") && (
                    <td>${item.revenue.toFixed(2)}</td>
                  )}
                  {activeColumns.includes("Fill Rate") && (
                    <td>{fillRate.toFixed(2)}%</td>
                  )}
                  {activeColumns.includes("CTR") && <td>{ctr.toFixed(2)}%</td>}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Container;
