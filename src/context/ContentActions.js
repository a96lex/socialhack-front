import axios from "axios";
import {
  GET_LIST_SUCCESS,
  GET_CENTER_SUCCESS,
  SET_CENTER_ID,
  ANY_ERROR,
} from "./Types";
import { Endpoint } from "../constants";

function getList(dispatch) {
  return async function getListDispatch(parameters) {
    const decorator = parameters?.isDonation ? "donations" : "volunteering";
    const params = {
      ...(parameters?.urgency ? { urgency: parameters.urgency } : {}),
      ...(parameters?.locality ? { locality: parameters.locality } : {}),
      ...(parameters?.duration ? { urgency: parameters.duration } : {}),
      ...(parameters?.centerId ? { centerId: parameters.centerId } : {}),
    };
    try {
      const { data } = await axios.get(`${Endpoint}${decorator}`, {
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
      const { data } = await axios.get(`${Endpoint}center`, {
        params,
      });
      dispatch({ type: GET_CENTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function uploadAction(dispatch) {
  return async function getCenterDispatch(parameters) {
    const decorator = parameters?.isDonation ? "donations" : "volunteering";
    console.log(parameters);
    const params = {
      ...(parameters?.urgency ? { urgency: parameters.urgency } : {}),
      ...(parameters?.item ? { item: parameters.item } : {}),
      ...(parameters?.locality ? { locality: parameters.locality } : {}),
      ...(parameters?.duration ? { duration: parameters.duration } : {}),
      ...(parameters?.description
        ? { description: parameters.description }
        : {}),
      ...(parameters?.title ? { title: parameters.title } : {}),
      ...(parameters?.centerId
        ? { centerId: parameters.centerId }
        : { centerId: "0_95" }),
    };
    console.log(params);
    try {
      await axios.get(`${Endpoint}${decorator}/create`, {
        params,
      });
      dispatch({ type: CREATE_ACCTION_SUCCESS });
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

export default { getList, setCenterId, getCenter, uploadAction };
