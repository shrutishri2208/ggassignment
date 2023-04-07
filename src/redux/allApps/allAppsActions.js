import { ACTIONS } from "./allAppsTypes";

export const fetchAppsRequest = () => {
  return {
    type: ACTIONS.FETCH_APP_REQUEST,
  };
};

export const fetchAppsSuccess = (apps) => {
  return {
    type: ACTIONS.FETCH_APP_SUCCESS,
    payload: apps,
  };
};

export const fetchAppsError = (error) => {
  return {
    type: ACTIONS.FETCH_APP_ERROR,
    payload: error,
  };
};

export const fetchApps = () => {
  return (dispatch) => {
    dispatch(fetchAppsRequest);
    fetch("http://go-dev.greedygame.com/v3/dummy/apps")
      .then((response) => response.json())
      .then((apps) => dispatch(fetchAppsSuccess(apps)))
      .catch((error) => dispatch(fetchAppsError(error)));
  };
};
