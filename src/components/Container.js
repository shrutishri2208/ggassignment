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

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // const trial = [
  //   {
  //     title: "Date",
  //     values: ["22", "8", "5", "3"],
  //   },
  //   {
  //     title: "App",
  //     values: ["Hello", "World", "Dog", "Cat"],
  //   },
  //   {
  //     title: "Clicks",
  //     values: ["34", "35", "26", "85"],
  //   },
  // ];

  const columnsOrder = Object.assign(
    {},
    ...columns.map((item) => ({ [item.accessor]: null }))
  );

  // console.log(data);
  let date = data.map((item) => item.date);
  let clicks = data.map((item) => item.clicks);

  // let allData = [{ date: date }, { clicks: clicks }];
  // console.log(date);

  // console.log(columnsOrder);
  // console.log(data[0].columnsAccessor[0]);

  // const data2 = [];
  // data2.push(data.map((item) => Object.assign(columnsOrder, item)));

  // const data2 = Object.assign(columnsOrder, data);
  // console.log(data2[0]);
  // let data3 = [];

  // data3.push(data2[0].map((item) => Object.values(item)));
  // console.log(data3[0][0]);
  // console.log(Object.values(data2[0][0]));
  // console.log(data2[0][0]);

  // console.log(data);
  // console.log(columns);

  // {
  //   data.map((item) => {
  //     Object.keys(item).map((key) => console.log(key));
  //   });
  // }
  console.log("COLUMNS", columns);

  let activeColumns = [];
  activeColumns = columns.filter(
    (item) =>
      item.visibility === true || item.title === "Date" || item.title === "App"
  );

  console.log("ACTIVE COLUMNS", activeColumns);
  let columnsAccessor = [];
  columnsAccessor = activeColumns.map((item) => item.accessor);
  // console.log(columnsAccessor);

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
            {/* {trial.map((item) => {
              return (
                <tr style={{ display: "table-cell" }}>
                  <th>{item.title}</th>
                  {item.values.map((value) => {
                    return <td style={{ display: "grid" }}>{value}</td>;
                  })}
                </tr>
              );
            })} */}
            <tr>
              <th></th>
            </tr>
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
              // console.log(item);

              // return Object.keys(item).map((key) => {
              //   return <tr>

              //   </tr>;
              // });

              return (
                <tr key={index} className="tr-border">
                  {columnsAccessor.map((key) => {
                    var display;
                    switch (key) {
                      case "app_id":
                        display = appName;
                        break;
                      case "date":
                        display = formatDate(item.date);
                        break;
                      case "requests":
                        display = item.requests.toLocaleString("en-US");
                        break;
                      case "responses":
                        display = item.responses.toLocaleString("en-US");
                        break;
                      case "impressions":
                        display = item.impressions.toLocaleString("en-US");
                        break;
                      case "clicks":
                        display = item.clicks.toLocaleString("en-US");
                        break;
                      case "revenue":
                        display = "$" + item.revenue.toFixed(2);
                        break;
                      case "fillRate":
                        display = fillRate.toFixed(2);
                        break;
                      case "CTR":
                        display = ctr.toFixed(2);
                        break;
                      default:
                        display = "NA";
                    }
                    // if (key === "app_id") display = appName;
                    // else if (key === "date") display = formatDate(item.date);
                    // else if (key === "requests")
                    //   display = item.requests.toLocaleString("en-US");
                    // else if (key === "responses")
                    //   display = item.responses.toLocaleString("en-US");
                    // else if (key === "impressions")
                    //   display = item.impressions.toLocaleString("en-US");
                    // else if (key === "clicks")
                    //   display = item.clicks.toLocaleString("en-US");
                    // else if (key === "revenue")
                    //   display = "$" + item.revenue.toFixed(2);
                    // else if (key === "fillRate") display = fillRate.toFixed(2);
                    // else if (key === "CTR") display = ctr.toFixed(2);

                    return <td>{display}</td>;
                  })}
                </tr>
              );

              // <tr key={index} className="text-left tr-border">
              //   <td>{formatDate(item.date)}</td>
              //   <td>{appName}</td>
              //   {activeColumns.includes("Ad Requests") && (
              //     <td>{item.requests.toLocaleString("en-US")}</td>
              //   )}
              //   {activeColumns.includes("Ad Response") && (
              //     <td>{item.responses.toLocaleString("en-US")}</td>
              //   )}
              //   {activeColumns.includes("Impression") && (
              //     <td>{item.impressions.toLocaleString("en-US")}</td>
              //   )}
              //   {activeColumns.includes("Clicks") && (
              //     <td>{item.clicks.toLocaleString("en-US")}</td>
              //   )}
              //   {activeColumns.includes("Revenue") && (
              //     <td>${item.revenue.toFixed(2)}</td>
              //   )}
              //   {activeColumns.includes("Fill Rate") && (
              //     <td>{fillRate.toFixed(2)}%</td>
              //   )}
              //   {activeColumns.includes("CTR") && <td>{ctr.toFixed(2)}%</td>}
              // </tr>
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Container;
