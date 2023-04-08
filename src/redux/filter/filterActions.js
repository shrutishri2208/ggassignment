import { ACTIONS } from "./filterTypes";

export const setSearchTerm = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_TERM,
    payload: search,
  };
};

export const setapp = (app) => {
  return {
    type: ACTIONS.SET_APP,
    payload: app,
  };
};
export const setrequests = (requests) => {
  return {
    type: ACTIONS.SET_REQUESTS,
    payload: requests,
  };
};
export const setimpressions = (impressions) => {
  return {
    type: ACTIONS.SET_IMPRESSIONS,
    payload: impressions,
  };
};
export const setclicks = (clicks) => {
  return {
    type: ACTIONS.SET_CLICKS,
    payload: clicks,
  };
};
export const setrevenue = (revenue) => {
  return {
    type: ACTIONS.SET_REVENUE,
    payload: revenue,
  };
};
export const setresponses = (responses) => {
  return {
    type: ACTIONS.SET_RESPONSES,
    payload: responses,
  };
};

export const setFilterName = (filter) => {
  return {
    type: ACTIONS.SET_FILTER_NAME,
    payload: filter,
  };
};
