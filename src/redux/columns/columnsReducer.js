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
      accessor: "app_id",
      visibility: true,
    },
    {
      id: 3,
      title: "Ad Requests",
      accessor: "requests",
      visibility: true,
    },
    {
      id: 4,
      title: "Ad Response",
      accessor: "responses",
      visibility: true,
    },
    {
      id: 5,
      title: "Impression",
      accessor: "impressions",
      visibility: true,
    },
    {
      id: 6,
      title: "Clicks",
      accessor: "clicks",
      visibility: true,
    },
    {
      id: 7,
      title: "Revenue",
      accessor: "revenue",
      visibility: true,
    },
    {
      id: 8,
      title: "Fill Rate",
      accessor: "fillRate",
      visibility: true,
    },
    {
      id: 9,
      title: "CTR",
      accessor: "CTR",
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
