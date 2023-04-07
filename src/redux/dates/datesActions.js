import { ACTIONS } from "./datesTypes";

export const setStartDate = (date) => {
  return {
    type: ACTIONS.SET_START_DATE,
    payload: date,
  };
};

export const setEndDate = (date) => {
  return {
    type: ACTIONS.SET_END_DATE,
    payload: date,
  };
};
