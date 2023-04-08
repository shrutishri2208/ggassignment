import { ACTIONS } from "./filterTypes";

const initialState = {
  filterName: null,
  searchTerm: "",
  searchValue: 10000000,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ACTIONS.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
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
