import { ACTIONS } from "./columnsTypes";

export const toggleState = (title) => {
  return {
    type: ACTIONS.TOGGLE_STATE,
    payload: title,
  };
};
