import { ACTIONS } from "./filterTypes";

export const setSearchTerm = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_TERM,
    payload: search,
  };
};

export const setSearchValue = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_VALUE,
    payload: search,
  };
};

export const setFilterName = (filter) => {
  return {
    type: ACTIONS.SET_FILTER_NAME,
    payload: filter,
  };
};
