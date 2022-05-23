import STATUSES from "../../config/statuses";
import {
  setEventsData,
  setEventsLoadingStatus,
  setEventsFetchingError,
} from "./actionCreators";
import ACTIONS from "./actionTypes";

const initialState = {
  status: STATUSES.INITIAL,
  error: "",
  data: [],
  currentPage: 0,
};

function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.EVENTS_LOADING:
      return {
        ...state,
        status: action.payload,
      };
    case ACTIONS.EVENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        currentPage: action.payload.page,
        status: STATUSES.SUCCESS,
      };

    case ACTIONS.EVENTS_ERROR:
      return {
        ...state,
        error: action.error,
        status: STATUSES.FAILED,
      };
    default:
      return state;
  }
}

export default eventsReducer;
