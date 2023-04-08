import { combineReducers } from "redux";

import allAppsReducer from "./allApps/allAppsReducer";
import datesReducer from "./dates/datesReducer";
import columnsReducer from "./columns/columnsReducer";
import filterReducer from "./filter/filterReducer";
import dataReducer from "./data/dataReducer";

const rootReducer = combineReducers({
  allApps: allAppsReducer,
  dates: datesReducer,
  columns: columnsReducer,
  filter: filterReducer,
  data: dataReducer,
});

export default rootReducer;
