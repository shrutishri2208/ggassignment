import { ACTIONS } from "./filterTypes";

const initialState = {
  filterName: null,
  searchTerm: "",
  searchValue1: 10000000,
  searchValue2: 1000,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ACTIONS.SET_SEARCH_VALUE1:
      return {
        ...state,
        searchValue1: action.payload,
      };
    case ACTIONS.SET_SEARCH_VALUE2:
      return {
        ...state,
        searchValue2: action.payload,
      };
    case ACTIONS.SET_FILTER_NAME:
      return {
        ...state,
        filterName: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
