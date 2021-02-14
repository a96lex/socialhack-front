import axios from "axios";
import {
  GET_LIST_SUCCESS,
  GET_CENTER_SUCCESS,
  SET_CENTER_ID,
  ANY_ERROR,
} from "./Types";

function getList(dispatch) {
  return async function getListDispatch(parameters) {
    const endpoint = parameters?.isDonation ? "donations" : "volunteering";
    const params = {
      ...(parameters?.urgency ? { urgency: parameters.urgency } : {}),
      ...(parameters?.locality ? { locality: parameters.locality } : {}),
      ...(parameters?.duration ? { urgency: parameters.duration } : {}),
      ...(parameters?.centerId ? { centerId: parameters.centerId } : {}),
    };
    try {
      const { data } = await axios.get(`http://localhost:8080/${endpoint}`, {
        params,
      });
      dispatch({ type: GET_LIST_SUCCESS, payload: data });
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
  return async function getCenterDispatch(id) {
    const params = {
      id,
    };
    try {
      const { data } = await axios.get("http://localhost:8080/center", {
        params,
      });
      dispatch({ type: GET_CENTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function updateAction(dispatch) {
  return async function getCenterDispatch(id) {
    const params = {
      id,
    };
    try {
      const { data } = await axios.get("http://localhost:8080/update", {
        params,
      });
      dispatch({ type: GET_CENTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

export default { getList, setCenterId, getCenter };
