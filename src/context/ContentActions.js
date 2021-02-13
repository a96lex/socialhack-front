import {
  VOLUNTEERING_LIST_SUCCESS,
  DONATION_LIST_SUCCESS,
  GET_CENTER_SUCCESS,
  ANY_ERROR,
} from "./Types";

function getVolunteeringList(dispatch) {
  return async function getVolunteeringListDispatch() {
    try {
      //llamada
      dispatch({ type: VOLUNTEERING_LIST_SUCCESS, payload: "data" });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function getDonationList(dispatch) {
  return async function getDonationListDispatch() {
    try {
      //llamada
      dispatch({ type: DONATION_LIST_SUCCESS, payload: "data" });
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

export default { getVolunteeringList, getDonationList, getCenter };
