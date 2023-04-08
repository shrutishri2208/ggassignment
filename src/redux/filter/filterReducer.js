import { ACTIONS } from "./filterTypes";

const initialState = {
  filterName: null,
  app: "",
  requests: 10000000,
  responses: 10000000,
  impressions: 10000000,
  clicks: 10000000,
  revenue: 10000000,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER_NAME:
      return {
        ...state,
        filterName: action.payload,
      };
    case ACTIONS.SET_APP:
      return {
        ...state,
        app: action.payload,
      };
    case ACTIONS.SET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case ACTIONS.SET_RESPONSES:
      return {
        ...state,
        responses: action.payload,
      };
    case ACTIONS.SET_IMPRESSIONS:
      return {
        ...state,
        impressions: action.payload,
      };
    case ACTIONS.SET_CLICKS:
      return {
        ...state,
        clicks: action.payload,
      };
    case ACTIONS.SET_REVENUE:
      return {
        ...state,
        revenue: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
