import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { watchProductFetch, watchSearch } from "./sagas/eventsSaga";

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composedEnhancer);
sagaMiddleware.run(watchProductFetch);
sagaMiddleware.run(watchSearch);

export default store;
