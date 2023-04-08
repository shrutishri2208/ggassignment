import { ACTIONS } from "./columnsTypes";

export const toggleState = (title) => {
  return {
    type: ACTIONS.TOGGLE_STATE,
    payload: title,
  };
};

export const toggleFilter = (title) => {
  return {
    type: ACTIONS.TOGGLE_FILTER,
    payload: title,
  };
};

export const setColumns = (columns) => {
  return {
    type: ACTIONS.SET_COLUMNS,
    payload: columns,
  };
};
