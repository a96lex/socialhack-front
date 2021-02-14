import { LOG_IN_SUCCESS, LOG_OFF, SIGN_UP_SUCCESS, ANY_ERROR } from "./Types";
import axios from "axios";
import { Endpoint } from "../constants";

function signIn(dispatch) {
  return async function signInDispatch(email, password) {
    try {
      const { data } = await axios.get(`${Endpoint}authentication/login`, {
        params: { email, password },
      });
      if (data.username) {
        const isEntity = data?.isEntity === "true";
        dispatch({ type: LOG_IN_SUCCESS, payload: data, isEntity });
      } else {
        dispatch({ type: ANY_ERROR, payload: data });
      }
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function signUp(dispatch) {
  return async function signUpDispatch(username, email, password, isEntity) {
    try {
      const { data } = await axios.get(`${Endpoint}authentication/register`, {
        params: { username, email, password, isEntity },
      });
      signIn(dispatch)(email, password);
    } catch (error) {
      dispatch({ type: ANY_ERROR, payload: error.message });
    }
  };
}

function logOff(dispatch) {
  return async function logOffDispatch() {
    dispatch({ type: LOG_OFF });
  };
}

function checkUser(dispatch) {
  return async function checkUserDispatch() {
    updateUser(dispatch);
  };
}

async function updateUser(dispatch) {
  try {
    dispatch({ type: LOG_IN_SUCCESS, payload: { name, idToken } });
  } catch (e) {
    dispatch({ type: LOG_OFF });
  }
}
export default { signIn, signUp, logOff, checkUser };
