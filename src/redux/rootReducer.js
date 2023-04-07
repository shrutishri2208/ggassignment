import { combineReducers } from "redux";

import allAppsReducer from "./allApps/allAppsReducer";
import datesReducer from "./dates/datesReducer";
import columnsReducer from "./columns/columnsReducer";

const rootReducer = combineReducers({
  allApps: allAppsReducer,
  dates: datesReducer,
  columns: columnsReducer,
});

export default rootReducer;
