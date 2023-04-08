import { combineReducers } from "redux";

import allAppsReducer from "./allApps/allAppsReducer";
import datesReducer from "./dates/datesReducer";
import columnsReducer from "./columns/columnsReducer";
import searchTermReducer from "./searchTerm/searchTermReducer";

const rootReducer = combineReducers({
  allApps: allAppsReducer,
  dates: datesReducer,
  columns: columnsReducer,
  searchTerm: searchTermReducer,
});

export default rootReducer;
