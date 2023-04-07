import { ACTIONS } from "./datesTypes";

const initialState = {
  startDate: new window.Date("07-01-2021"),
  endDate: new window.Date("07-31-2021"),
};

const datesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case ACTIONS.SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    default:
      return state;
  }
};

export default datesReducer;
