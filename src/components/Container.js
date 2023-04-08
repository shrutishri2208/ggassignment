import React, { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector, useDispatch } from "react-redux";
import { fetchApps } from "../redux/allApps/allAppsActions";
import { toggleFilter } from "../redux/columns/columnsActions";
import { setAllData } from "../redux/data/dataActions";
import Filter from "./Filter";

const Container = () => {
  const startDate = useSelector((state) => state.dates.startDate);
  const endDate = useSelector((state) => state.dates.endDate);

  const allApps = useSelector((state) => state.allApps.allApps);
  const appLoading = useSelector((state) => state.allApps.loading);

  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const searchValue1 = useSelector((state) => state.filter.searchValue1);
  const searchValue2 = useSelector((state) => state.filter.searchValue2);

  const filterName = useSelector((state) => state.filter.filterName);

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

  let activeColumns = [];
  activeColumns = columns.filter(
    (item) =>
      item.visibility === true || item.title === "Date" || item.title === "App"
  );

  let columnsAccessor = [];
  columnsAccessor = activeColumns.map((item) => item.accessor);

  useEffect(() => {
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setData(data.data);
          dispatch(setAllData(data.data));
        });
    } catch (error) {
      console.log(error);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    dispatch(fetchApps());
  }, []);

  let dataToShow = data;
  console.log("FILTERNAME", filterName);
  console.log("SEARCHVALUE1", searchValue1);
  console.log("SEARCHVALUE2", searchValue2);

  if (filterName === null) dataToShow = data;
  else if (filterName === "app_id")
    dataToShow = dataToShow.filter(
      (item) => item.app_id.includes(searchTerm) && item.revenue <= searchValue2
    );
  else if (filterName === "CTR")
    dataToShow = dataToShow.filter(
      (item) =>
        item.app_id.includes(searchTerm) &&
        (item.clicks / item.impressions) * 100 <= searchValue2 &&
        item.revenue <= searchValue2
    );
  else if (filterName === "fillRate")
    dataToShow = dataToShow.filter(
      (item) =>
        item.app_id.includes(searchTerm) &&
        (item.requests / item.responses) * 100 <= searchValue2 &&
        item.revenue <= searchValue2
    );
  else if (filterName === "revenue")
    dataToShow = dataToShow.filter(
      (item) =>
        item.app_id.includes(searchTerm) &&
        item.revenue <= searchValue2 &&
        item[filterName] <= searchValue1
    );
  else
    dataToShow = dataToShow.filter(
      (item) =>
        item.app_id.includes(searchTerm) &&
        item[filterName] <= searchValue1 &&
        item.revenue <= searchValue2
    );

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
                    {item.title !== "Date" && (
                      <button
                        onClick={() => {
                          dispatch(toggleFilter(item.title));
                        }}
                      >
                        <FilterAltIcon />
                      </button>
                    )}

                    {item.isFilter && item.title !== "Date" && (
                      <Filter item={item} />
                    )}
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
          <p>Loading...</p>
        ) : (
          <tbody>
            {dataToShow.map((item, index) => {
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
                        display = fillRate.toFixed(2) + "%";
                        break;
                      case "CTR":
                        display = ctr.toFixed(2) + "%";
                        break;
                      default:
                        display = item[key];
                    }

                    return <td>{display}</td>;
                  })}
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
