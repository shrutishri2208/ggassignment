import { ACTIONS } from "./columnsTypes";

const initialState = {
  columns: [
    {
      id: 1,
      title: "Date",
      accessor: "date",
      visibility: true,
      isFilter: false,
    },
    {
      id: 2,
      title: "App",
      accessor: "app_id",
      visibility: true,
      isFilter: false,
    },
    {
      id: 3,
      title: "Ad Requests",
      accessor: "requests",
      visibility: true,
      isFilter: false,
    },
    {
      id: 4,
      title: "Ad Response",
      accessor: "responses",
      visibility: true,
      isFilter: false,
    },
    {
      id: 5,
      title: "Impression",
      accessor: "impressions",
      visibility: true,
      isFilter: false,
    },
    {
      id: 6,
      title: "Clicks",
      accessor: "clicks",
      visibility: true,
      isFilter: false,
    },
    {
      id: 7,
      title: "Revenue",
      accessor: "revenue",
      visibility: true,
      isFilter: false,
    },
    {
      id: 8,
      title: "Fill Rate",
      accessor: "fillRate",
      visibility: true,
      isFilter: false,
    },
    {
      id: 9,
      title: "CTR",
      accessor: "CTR",
      visibility: true,
      isFilter: false,
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

    case ACTIONS.TOGGLE_FILTER:
      const newStateFilter = state.columns.map((item) =>
        item.title === action.payload
          ? { ...item, isFilter: !item.isFilter }
          : item
      );
      return { ...state, columns: newStateFilter };

    case ACTIONS.SET_COLUMNS:
      return {
        columns: action.payload,
      };
    default:
      return state;
  }
};

export default columnsReducer;
