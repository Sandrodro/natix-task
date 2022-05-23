import ACTIONS from "./actionTypes";

function setEventsLoadingStatus(status, page = 1, search = "") {
  return {
    type: ACTIONS.EVENTS_LOADING,
    payload: status,
    page: page,
    search: search,
  };
}

function setEventsData(data, page) {
  return {
    type: ACTIONS.EVENTS_SUCCESS,
    payload: {
      data,
      page,
    },
  };
}

function setSearch(term) {
  return {
    type: ACTIONS.EVENTS_SEARCH,
    payload: {
      term,
    },
  };
}

function setEventsFetchingError(error) {
  return {
    type: ACTIONS.EVENTS_ERROR,
    payload: error,
  };
}

export {
  setEventsData,
  setEventsFetchingError,
  setEventsLoadingStatus,
  setSearch,
};
