//상태가 관리되는 오직 하나뿐인 저장소의 역할

import { rootReducer } from "../store";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" && composeWithDevTools(applyMiddleware(logger))
);
