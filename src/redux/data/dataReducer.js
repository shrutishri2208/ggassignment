import { ACTIONS } from "./dataTypes";

const initialState = {
  allData: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ALL_DATA:
      return {
        allData: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
