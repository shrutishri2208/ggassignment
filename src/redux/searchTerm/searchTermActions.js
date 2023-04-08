import { ACTIONS } from "./searchTermTypes";

export const setSearchTerm = (search) => {
  return {
    type: ACTIONS.SET_SEARCH_TERM,
    payload: search,
  };
};
