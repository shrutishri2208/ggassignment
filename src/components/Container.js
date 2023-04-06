import React, { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Container = ({ startDate, endDate }) => {
  const getDate = (date) => {
    return [
      date.getFullYear(),
      "0" + (date.getMonth() + 1),
      date.getDate() < 9 ? "0" + date.getDate() : date.getDate(),
    ].join("-");
  };
  const sDate = getDate(startDate);
  const eDate = getDate(endDate);
  const [data, setData] = useState([]);
  const [allApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(
      "http://go-dev.greedygame.com/v3/dummy/report?startDate=" +
        sDate +
        "&endDate=" +
        eDate
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data);
      });
  };
  const fetchApps = async () => {
    const response = await fetch("http://go-dev.greedygame.com/v3/dummy/apps");
    const apps = await response.json();
    setAllApps(apps);
  };
  //   const fetchApps = () => {
  //     fetch("http://go-dev.greedygame.com/v3/dummy/apps")
  //       .then((response) => response.json())
  //       .then((apps) => {
  //         setLoading(false);
  //         setAllApps(apps);
  //       });
  //   };
  useEffect(() => {
    fetchData();
    fetchApps();
  }, []);
  console.log(allApps);

  const getApps = () => {
    fetchApps();
    let dictionary = allApps
      ? Object.fromEntries(
          allApps.data.map((item) => [item.app_id, item.app_name])
        )
      : {};
    console.log(dictionary);
  };

  return (
    <div>
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
              return (
                <tr key={index} className="text-left">
                  <td>{date}</td>
                  <td>{item.app_id}</td>
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
