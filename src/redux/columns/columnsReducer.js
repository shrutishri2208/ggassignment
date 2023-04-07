import { ACTIONS } from "./columnsTypes";

const initialState = {
  columns: [
    {
      id: 1,
      title: "Date",
      accessor: "date",
      visibility: true,
    },
    {
      id: 2,
      title: "App",
      visibility: true,
    },
    {
      id: 3,
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
    {
      id: 6,
      title: "Clicks",
      visibility: true,
    },
    {
      id: 7,
      title: "Revenue",
      visibility: true,
    },
    {
      id: 8,
      title: "Fill Rate",
      visibility: true,
    },
    {
      id: 9,
      title: "CTR",
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

    case ACTIONS.SET_COLUMNS:
      return {
        columns: action.payload,
      };
    default:
      return state;
  }
};

export default columnsReducer;
