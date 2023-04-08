import { ACTIONS } from "./dataTypes";

export const setAllData = (allData) => {
  return {
    type: ACTIONS.SET_ALL_DATA,
    payload: allData,
  };
};
