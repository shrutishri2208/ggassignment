import { ACTIONS } from "./columnsTypes";

const initialState = {
  columns: [
    {
      id: 1,
      title: "Date",
      visibility: true,
    },
    {
      id: 3,
      title: "App",
      visibility: true,
    },
    {
      id: 2,
      title: "Ad Requests",
      visibility: true,
    },
    {
      id: 4,
      title: "Ad Response",
      visibility: true,
    },
    {
      id: 5,
      title: "Impression",
      visibility: true,
    },
  ],
};

const columnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATE:
      const newState = state.columns.map((item) =>
        item.title === action.payload
          ? { ...item, visibility: !item.visibility }
          : item
      );
      return { ...state, columns: newState };
    default:
      return state;
  }
};

export default columnsReducer;
