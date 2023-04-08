import { ACTIONS } from "./searchTermTypes";

const initialState = {
  searchTerm: "",
};

const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TERM:
      return {
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default searchTermReducer;
