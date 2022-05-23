import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./state/store";
import { setEventsLoadingStatus } from "./state/eventsSlice/actionCreators";
import STATUSES from "./config/statuses";
import Main from "./pages/Main";

function App() {
  useEffect(() => {
    store.dispatch(setEventsLoadingStatus(STATUSES.PENDING));
  }, []);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
