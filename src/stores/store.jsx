import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const intialState = {};
const middleware = [thunk];

if (window.navigator.userAgent.includes("Chrome")) {
  var store = createStore(
    rootReducer,
    intialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  var store = createStore(
    rootReducer,
    intialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
