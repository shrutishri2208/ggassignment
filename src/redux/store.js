import { createStore, applyMiddleware } from "redux";
import datesReducer from "./dates/datesReducer";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
