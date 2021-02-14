import {
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_CENTER_SUCCESS,
  SET_CENTER_ID,
  ANY_ERROR,
} from "./Types";

function getVolunteeringList(dispatch) {
  return async function getVolunteeringListDispatch() {
    try {
      dispatch({ type: GET_LIST_START });
      //llamada
      dispatch({ type: GET_LIST_SUCCESS, payload: "data" });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function getDonationList(dispatch) {
  return async function getDonationListDispatch() {
    try {
      dispatch({ type: GET_LIST_START });
      //llamada
      dispatch({ type: GET_LIST_SUCCESS, payload: "data" });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function setCenterId(dispatch) {
  return async function setCenterIdDispatch(centerId) {
    try {
      dispatch({ type: SET_CENTER_ID, payload: centerId });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function getCenter(dispatch) {
  return async function getCenterDispatch() {
    try {
      //llamada
      dispatch({ type: GET_CENTER_SUCCESS, payload: "data" });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

export default { getVolunteeringList, getDonationList, setCenterId, getCenter };
