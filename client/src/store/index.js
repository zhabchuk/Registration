import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/index";
import categoryReducer from "./category/index";
import modalsReducer from "./modals/index";

export const rootReducers = combineReducers({
  authReducer,
  categoryReducer,
  modalsReducer,
});

const middleware = [thunk];

export const configureStore = (initState) => {
  const store = createStore(
    rootReducers,
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};
