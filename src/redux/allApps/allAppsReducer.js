import { ACTIONS } from "./allAppsTypes";

const initialState = {
  loading: true,
  allApps: [],
  error: "",
};

const allAppsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_APP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_APP_SUCCESS:
      return {
        loading: false,
        allApps: action.payload,
        error: "",
      };
    case ACTIONS.FETCH_APP_ERROR:
      return {
        loading: false,
        allApps: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default allAppsReducer;
