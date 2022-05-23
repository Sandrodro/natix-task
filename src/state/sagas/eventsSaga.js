import { call, put, takeEvery } from "redux-saga/effects";
import STATUSES from "../../config/statuses";
import { getEventsPerPage } from "../../api";
import ACTIONS from "../eventsSlice/actionTypes";
import {
  setEventsLoadingStatus,
  setEventsData,
  setEventsFetchingError,
} from "../eventsSlice/actionCreators";
import { filterAllEvents } from "../../api";

function* fetchEvents(action) {
  try {
    setEventsLoadingStatus(STATUSES.PENDING);
    const events = yield call(getEventsPerPage, action.page);
    yield put(setEventsData(events, action.page));
  } catch (error) {
    yield put(setEventsFetchingError(error));
  }
}

function* searchEvents(action) {
  try {
    setEventsLoadingStatus(STATUSES.PENDING);
    const events = yield call(filterAllEvents, action.payload.term);
    yield put(setEventsData(events, action.page));
  } catch (error) {
    yield put(setEventsFetchingError(error));
  }
}

function* watchProductFetch() {
  yield takeEvery(ACTIONS.EVENTS_LOADING, fetchEvents);
}

function* watchSearch() {
  yield takeEvery(ACTIONS.EVENTS_SEARCH, searchEvents);
}

export { watchProductFetch, watchSearch };
