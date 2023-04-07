import { combineReducers } from "redux";

import allAppsReducer from "./allApps/allAppsReducer";
import datesReducer from "./dates/datesReducer";

const rootReducer = combineReducers({
  allApps: allAppsReducer,
  dates: datesReducer,
});

export default rootReducer;
