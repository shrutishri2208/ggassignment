import { ACTIONS } from "./filterTypes";

export const setSearchTerm = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_TERM,
    payload: search,
  };
};

export const setSearchValue1 = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_VALUE1,
    payload: search,
  };
};
export const setSearchValue2 = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_VALUE2,
    payload: search,
  };
};

export const setFilterName = (filter) => {
  return {
    type: ACTIONS.SET_FILTER_NAME,
    payload: filter,
  };
};
